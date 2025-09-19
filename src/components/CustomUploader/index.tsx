import { createElement, useState, useEffect } from "react";
import { ElementFactory, Question, Serializer, QuestionFileModel } from "survey-core";
import { SurveyQuestionElementBase, ReactQuestionFactory } from "survey-react-ui";
import { createClient } from "@supabase/supabase-js";

const CUSTOM_TYPE = "supabaseUploader";

// SVG Icons
const FolderIcon = () => (
  <svg className="sv-svg-icon" role="presentation">
    <use xlinkHref="#icon-folder-24x24"></use>
    <title>Select File</title>
  </svg>
);

const CameraIcon = () => (
  <svg className="sv-svg-icon sd-action__icon" role="presentation">
    <use xlinkHref="#icon-camera-24x24"></use>
    <title>Take Photo</title>
  </svg>
);

const ClearIcon = () => (
  <svg className="sv-svg-icon sd-action__icon" role="presentation">
    <use xlinkHref="#icon-clear-24x24"></use>
    <title>Clear</title>
  </svg>
);

// 1. Create the Model
export class SupabaseUploaderModel extends QuestionFileModel {
  getType() {
    return CUSTOM_TYPE;
  }

  // Override the loading file method
  loadFiles(files: File[]) {
    this.isUploading = true;
    const file = files[0]; // We only handle one file

    if (!file.type.includes('jpeg') && !file.type.includes('jpg')) {
      this.showError("Only JPG files are allowed");
      this.isUploading = false;
      return;
    }

    uploadToSupabase(file)
      .then((filePath) => {
        console.log('File uploaded successfully, path:', filePath);
        this.value = filePath;
        this.isUploading = false;
      })
      .catch((error) => {
        console.error('Upload error:', error);
        this.showError("Error uploading file: " + error.message);
        this.isUploading = false;
      });
  }
}

// 2. Create the UI Component
export class SurveyQuestionSupabaseUploader extends SurveyQuestionElementBase {
  state = {
    signedUrl: '',
    isDragging: false
  };

  constructor(props: any) {
    super(props);
  }

  get question(): SupabaseUploaderModel {
    return this.questionBase as SupabaseUploaderModel;
  }

  componentDidUpdate(prevProps: any) {
    if (this.question.value && this.question.value !== prevProps?.question?.value) {
      this.updateSignedUrl();
    }
  }

  componentDidMount() {
    if (this.question.value) {
      this.updateSignedUrl();
    }
  }

  async updateSignedUrl() {
    try {
      console.log('Updating signed URL for:', this.question.value);

      const { data, error } = await supabase.storage
        .from("surveys")
        .createSignedUrl(this.question.value, 3600);

      if (error) {
        console.error('Error creating signed URL:', error);
        return;
      }

      if (data?.signedUrl) {
        console.log('Received signed URL:', data.signedUrl);
        this.setState({ signedUrl: data.signedUrl });
      } else {
        console.error('No signed URL received');
      }
    } catch (error) {
      console.error('Error getting signed URL:', error);
    }
  }

  handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.question.loadFiles(Array.from(files));
    }
  };

  handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ isDragging: true });
  };

  handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ isDragging: false });
  };

  handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ isDragging: false });

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      this.question.loadFiles(Array.from(files));
    }
  };

  handleClear = () => {
    this.question.value = "";
    this.setState({ signedUrl: "" });
  };

  renderElement() {
    const { isDragging } = this.state;
    const hasValue = !!this.question.value;

    return (
      <div className="sd-file">
        <div
          className={`sd-file__decorator ${isDragging ? 'sd-file__decorator--drag' : ''}`}
          onDragOver={this.handleDragOver}
          onDragLeave={this.handleDragLeave}
          onDrop={this.handleDrop}
        >
          {!hasValue && (
            <span className="sd-file__drag-area-placeholder">
              <span className="sv-string-viewer sv-string-viewer--multiline">
                Drag and drop a file here or click the button below to select a file to upload.
              </span>
            </span>
          )}

          <div className="sd-file__wrapper">
            <div className="sd-action-bar sd-file__actions-container">
              <div className="sv-action" id="sv-file-choose-file">
                <div className="sv-action__content">
                  <label
                    tabIndex={0}
                    className="sd-file__choose-btn sd-action sd-file__choose-btn--text"
                    htmlFor={this.question.inputId}
                  >
                    <FolderIcon />
                    <span>Select File</span>
                  </label>
                  <input
                    type="file"
                    accept="image/jpeg,image/jpg"
                    onChange={this.handleFileChange}
                    disabled={this.question.isReadOnly || this.question.isUploading}
                    className="sd-visuallyhidden"
                    id={this.question.inputId}
                  />
                </div>
              </div>

              {hasValue && (
                <div className="sv-action" id="sv-file-clean">
                  <div className="sv-action__content">
                    <button
                      className="sd-context-btn sd-context-btn--negative"
                      type="button"
                      title="Clear"
                      onClick={this.handleClear}
                    >
                      <ClearIcon />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {this.question.isUploading && (
              <div className="sd-file__loading-indicator">
                <span>Uploading...</span>
              </div>
            )}

            {hasValue && this.state.signedUrl && (
              <div className="sd-file__preview">
                <img
                  src={this.state.signedUrl}
                  alt="Preview"
                  style={{ maxWidth: '200px', marginTop: '10px' }}
                />
              </div>
            )}
          </div>
        </div>

        {this.question.errors.length > 0 && (
          <div className="sd-file__error">
            {this.question.errors[0].getText()}
          </div>
        )}
      </div>
    );
  }
}

// 3. Supabase configuration and upload function
const supabase = createClient(
  "https://npgzfxnoycbpgpegogbl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wZ3pmeG5veWNicGdwZWdvZ2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMjQ2ODksImV4cCI6MjA2NDkwMDY4OX0.B6l3ADsUxdndTtsbOCuamICuM0n7mB7z3U4uEk0ldnQ"
);


export async function getSignedUrl(filePath: string): Promise<string> {
  const { data, error } = await supabase.storage
    .from("surveys")
    .createSignedUrl(filePath, 3600);

  if (error) {
    console.error('Error creating signed URL:', error);
    throw error;
  }

  return data.signedUrl;
}

export async function uploadToSupabase(file: File): Promise<string> {
  const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const randomPrefix = Math.random().toString(36).substring(2, 15);
  const filePath = `public/${randomPrefix}-${sanitizedFileName}`;

  const { error } = await supabase.storage
    .from("surveys")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type
    });

  if (error) {
    console.error('Upload error:', error);
    throw error;
  }

  // return the public url
  const publicUrl = `${supabase.storage.from('surveys').getPublicUrl(filePath).data.publicUrl}`;

  return publicUrl;
}

// 4. Register the custom component
export function registerSupabaseUploader() {
  // Register the model
  ElementFactory.Instance.registerElement(CUSTOM_TYPE, (name) => {
    return new SupabaseUploaderModel(name);
  });

  // Register the component properties
  Serializer.addClass(
    CUSTOM_TYPE,
    [
      { name: "showPreview:boolean", default: true },
      { name: "allowMultiple:boolean", default: false },
      { name: "imageHeight", default: 150, visible: false },
      { name: "imageWidth", default: 200, visible: false },
      { name: "acceptedTypes", default: "image/jpeg, image/jpg", visible: false }
    ],
    function () {
      return new SupabaseUploaderModel("supabaseUploader");
    },
    "file"
  );

  // Register the UI component
  ReactQuestionFactory.Instance.registerQuestion(CUSTOM_TYPE, (props) => {
    return createElement(SurveyQuestionSupabaseUploader, props);
  });
}
