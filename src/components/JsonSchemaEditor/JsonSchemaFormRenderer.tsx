'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';

interface JsonSchemaFormRendererProps {
  schema: any;
  onSubmit?: (data: any) => void;
  initialData?: any;
}

interface FormData {
  [key: string]: any;
}

interface ValidationError {
  field: string;
  message: string;
}

function JsonSchemaFormRenderer({ schema, onSubmit, initialData = {} }: JsonSchemaFormRendererProps) {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [visibleFields, setVisibleFields] = useState<Set<string>>(new Set());

  // Evaluate conditional logic to determine visible fields
  const evaluateConditionals = useCallback(() => {
    const newVisibleFields = new Set<string>();

    // Handle root-level if/then structure
    if (schema.if && schema.then) {
      const condition = schema.if;
      const thenSchema = schema.then;

      // Check if condition is met
      let conditionMet = true;

      if (condition.properties) {
        Object.entries(condition.properties).forEach(([fieldName, fieldCondition]: [string, any]) => {
          const fieldValue = formData[fieldName];

          if (fieldCondition.const !== undefined) {
            if (fieldValue !== fieldCondition.const) {
              conditionMet = false;
            }
          } else if (fieldCondition.not) {
            if (fieldValue === fieldCondition.not.const) {
              conditionMet = false;
            }
          } else if (fieldCondition.pattern) {
            const regex = new RegExp(fieldCondition.pattern);
            if (!regex.test(String(fieldValue))) {
              conditionMet = false;
            }
          } else if (fieldCondition.minimum !== undefined) {
            if (Number(fieldValue) < fieldCondition.minimum) {
              conditionMet = false;
            }
          } else if (fieldCondition.maximum !== undefined) {
            if (Number(fieldValue) > fieldCondition.maximum) {
              conditionMet = false;
            }
          }
        });
      }

      // If condition is met, add fields from then schema to visible fields
      if (conditionMet && thenSchema.required) {
        thenSchema.required.forEach((fieldName: string) => {
          newVisibleFields.add(fieldName);
        });
      }
    }

    // Handle allOf structure (for backward compatibility)
    if (schema.allOf) {
      schema.allOf.forEach((conditional: any) => {
        if (conditional.if && conditional.then) {
          const condition = conditional.if;
          const thenSchema = conditional.then;

          // Check if condition is met
          let conditionMet = true;

          if (condition.properties) {
            Object.entries(condition.properties).forEach(([fieldName, fieldCondition]: [string, any]) => {
              const fieldValue = formData[fieldName];

              if (fieldCondition.const !== undefined) {
                if (fieldValue !== fieldCondition.const) {
                  conditionMet = false;
                }
              } else if (fieldCondition.not) {
                if (fieldValue === fieldCondition.not.const) {
                  conditionMet = false;
                }
              } else if (fieldCondition.pattern) {
                const regex = new RegExp(fieldCondition.pattern);
                if (!regex.test(String(fieldValue))) {
                  conditionMet = false;
                }
              } else if (fieldCondition.minimum !== undefined) {
                if (Number(fieldValue) < fieldCondition.minimum) {
                  conditionMet = false;
                }
              } else if (fieldCondition.maximum !== undefined) {
                if (Number(fieldValue) > fieldCondition.maximum) {
                  conditionMet = false;
                }
              }
            });
          }

          // If condition is met, add fields from then schema to visible fields
          if (conditionMet && thenSchema.properties) {
            Object.keys(thenSchema.properties).forEach(fieldName => {
              newVisibleFields.add(fieldName);
            });
          }
        }
      });
    }

    setVisibleFields(newVisibleFields);
  }, [schema, formData]);

  // Update visible fields when form data changes
  useEffect(() => {
    evaluateConditionals();
  }, [evaluateConditionals]);

  // Handle field value changes
  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));

    // Clear errors for this field
    setErrors(prev => prev.filter(error => error.field !== fieldName));
  };

  // Validate form data
  const validateForm = (): ValidationError[] => {
    const validationErrors: ValidationError[] = [];

    // Check required fields
    const requiredFields = schema.required || [];
    requiredFields.forEach((fieldName: string) => {
      if (!formData[fieldName] && formData[fieldName] !== 0 && formData[fieldName] !== false) {
        validationErrors.push({
          field: fieldName,
          message: `${fieldName} is required`
        });
      }
    });

    // Check root-level conditional required fields
    if (schema.if && schema.then) {
      const condition = schema.if;
      const thenSchema = schema.then;

      // Check if condition is met
      let conditionMet = true;

      if (condition.properties) {
        Object.entries(condition.properties).forEach(([fieldName, fieldCondition]: [string, any]) => {
          const fieldValue = formData[fieldName];

          if (fieldCondition.const !== undefined) {
            if (fieldValue !== fieldCondition.const) {
              conditionMet = false;
            }
          }
        });
      }

      // If condition is met, check required fields in then schema
      if (conditionMet && thenSchema.required) {
        thenSchema.required.forEach((fieldName: string) => {
          if (!formData[fieldName] && formData[fieldName] !== 0 && formData[fieldName] !== false) {
            validationErrors.push({
              field: fieldName,
              message: `${fieldName} is required`
            });
          }
        });
      }
    }

    // Check allOf conditional required fields (for backward compatibility)
    if (schema.allOf) {
      schema.allOf.forEach((conditional: any) => {
        if (conditional.if && conditional.then) {
          const condition = conditional.if;
          const thenSchema = conditional.then;

          // Check if condition is met
          let conditionMet = true;

          if (condition.properties) {
            Object.entries(condition.properties).forEach(([fieldName, fieldCondition]: [string, any]) => {
              const fieldValue = formData[fieldName];

              if (fieldCondition.const !== undefined) {
                if (fieldValue !== fieldCondition.const) {
                  conditionMet = false;
                }
              }
            });
          }

          // If condition is met, check required fields in then schema
          if (conditionMet && thenSchema.required) {
            thenSchema.required.forEach((fieldName: string) => {
              if (!formData[fieldName] && formData[fieldName] !== 0 && formData[fieldName] !== false) {
                validationErrors.push({
                  field: fieldName,
                  message: `${fieldName} is required`
                });
              }
            });
          }
        }
      });
    }

    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (validationErrors.length === 0) {
      onSubmit?.(formData);
    }
  };

  // Render form field based on schema
  const renderField = (fieldName: string, fieldSchema: any) => {
    const isVisible = visibleFields.has(fieldName) || schema.properties[fieldName];
    const hasError = errors.some(error => error.field === fieldName);

    if (!isVisible) return null;

    const fieldId = `field-${fieldName}`;
    const value = formData[fieldName] || '';

    return (
      <div key={fieldName} className="mb-4">
        <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {fieldSchema.title || fieldName}
          {schema.required?.includes(fieldName) && <span className="text-red-500 ml-1">*</span>}
        </label>

        {fieldSchema.description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{fieldSchema.description}</p>
        )}

        {fieldSchema.type === 'string' && (
          <input
            id={fieldId}
            type="text"
            value={value}
            onChange={(e) => handleFieldChange(fieldName, e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              hasError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
            placeholder={fieldSchema.title || fieldName}
          />
        )}

        {fieldSchema.type === 'number' && (
          <input
            id={fieldId}
            type="number"
            value={value}
            onChange={(e) => handleFieldChange(fieldName, Number(e.target.value))}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              hasError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
            placeholder={fieldSchema.title || fieldName}
          />
        )}

        {fieldSchema.type === 'boolean' && (
          <div className="flex items-center">
            <input
              id={fieldId}
              type="checkbox"
              checked={Boolean(value)}
              onChange={(e) => handleFieldChange(fieldName, e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor={fieldId} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {fieldSchema.title || fieldName}
            </label>
          </div>
        )}

        {fieldSchema.oneOf && (
          <select
            id={fieldId}
            value={value}
            onChange={(e) => handleFieldChange(fieldName, e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              hasError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
          >
            <option value="">Select an option</option>
            {fieldSchema.oneOf.map((option: any, index: number) => (
              <option key={index} value={option.const}>
                {option.title || option.const}
              </option>
            ))}
          </select>
        )}

        {hasError && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.find(error => error.field === fieldName)?.message}
          </p>
        )}
      </div>
    );
  };

  if (!schema || !schema.properties) {
    return (
      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
        No schema provided or schema has no properties.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Dynamic Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.entries(schema.properties).map(([fieldName, fieldSchema]: [string, any]) =>
            renderField(fieldName, fieldSchema)
          )}

          {/* Render conditionally visible fields */}
          {Array.from(visibleFields).map(fieldName => {
            if (schema.properties[fieldName]) return null; // Already rendered above
            return renderField(fieldName, schema.allOf?.find((c: any) =>
              c.then?.properties?.[fieldName]
            )?.then?.properties?.[fieldName]);
          })}

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </Button>
          </div>
        </form>

        {/* Debug info */}
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
          <h3 className="font-medium mb-2">Debug Info:</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Visible fields: {Array.from(visibleFields).join(', ') || 'none'}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Form data: {JSON.stringify(formData, null, 2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default JsonSchemaFormRenderer;
