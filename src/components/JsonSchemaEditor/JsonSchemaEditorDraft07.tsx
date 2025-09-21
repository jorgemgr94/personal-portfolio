'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import JsonSchemaFormRenderer from './JsonSchemaFormRenderer';
import {
  Plus,
  Trash2,
  GripVertical,
  Eye,
  Code,
  Settings,
  Type,
  Hash,
  CheckSquare,
  List,
  Map,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Calendar,
  Mail,
  Globe,
  CreditCard,
  FileText
} from 'lucide-react';

// Enhanced types for JSON Schema Draft-07
interface SchemaBlock {
  id: string;
  type:
    | 'string'
    | 'number'
    | 'integer'
    | 'boolean'
    | 'array'
    | 'object'
    | 'enum'
    | 'null';
  title: string;
  description?: string;
  required?: boolean;
  groupId?: string; // For grouping related fields
  properties?: Record<string, SchemaBlock>;
  items?: SchemaBlock;
  oneOf?: Array<{ const: string; title: string }>;
  enum?: string[];

  // String validations
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  format?:
    | 'email'
    | 'uri'
    | 'date'
    | 'date-time'
    | 'time'
    | 'uuid'
    | 'hostname'
    | 'ipv4'
    | 'ipv6'
    | 'json-pointer'
    | 'regex';

  // Number validations
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  multipleOf?: number;

  // Array validations
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;

  // Object validations
  minProperties?: number;
  maxProperties?: number;
  additionalProperties?: boolean | SchemaBlock;
  requiredProperties?: string[];

  // Conditional validations
  if?: SchemaBlock;
  then?: SchemaBlock;
  else?: SchemaBlock;

  // Schema composition
  allOf?: SchemaBlock[];
  anyOf?: SchemaBlock[];
  not?: SchemaBlock;

  // Metadata
  examples?: any[];
  default?: any;
  const?: any;
  readOnly?: boolean;
  writeOnly?: boolean;
  deprecated?: boolean;
}

// Conditional validation rule interface
interface ConditionalRule {
  id: string;
  name: string;
  condition: {
    fieldId: string;
    operator:
      | 'equals'
      | 'not_equals'
      | 'contains'
      | 'greater_than'
      | 'less_than';
    value: string | number | boolean;
  };
  action: {
    type: 'require_field' | 'hide_field' | 'show_field' | 'set_value';
    fieldId?: string;
    value?: any;
  };
}

interface JsonSchemaEditorProps {
  initialSchema?: any;
  onChange?: (schema: any) => void;
}

// US States for address fields
const US_STATES = [
  { const: 'AL', title: 'Alabama' },
  { const: 'AK', title: 'Alaska' },
  { const: 'AZ', title: 'Arizona' },
  { const: 'AR', title: 'Arkansas' },
  { const: 'CA', title: 'California' },
  { const: 'CO', title: 'Colorado' },
  { const: 'CT', title: 'Connecticut' },
  { const: 'DE', title: 'Delaware' },
  { const: 'FL', title: 'Florida' },
  { const: 'GA', title: 'Georgia' },
  { const: 'HI', title: 'Hawaii' },
  { const: 'ID', title: 'Idaho' },
  { const: 'IL', title: 'Illinois' },
  { const: 'IN', title: 'Indiana' },
  { const: 'IA', title: 'Iowa' },
  { const: 'KS', title: 'Kansas' },
  { const: 'KY', title: 'Kentucky' },
  { const: 'LA', title: 'Louisiana' },
  { const: 'ME', title: 'Maine' },
  { const: 'MD', title: 'Maryland' },
  { const: 'MA', title: 'Massachusetts' },
  { const: 'MI', title: 'Michigan' },
  { const: 'MN', title: 'Minnesota' },
  { const: 'MS', title: 'Mississippi' },
  { const: 'MO', title: 'Missouri' },
  { const: 'MT', title: 'Montana' },
  { const: 'NE', title: 'Nebraska' },
  { const: 'NV', title: 'Nevada' },
  { const: 'NH', title: 'New Hampshire' },
  { const: 'NJ', title: 'New Jersey' },
  { const: 'NM', title: 'New Mexico' },
  { const: 'NY', title: 'New York' },
  { const: 'NC', title: 'North Carolina' },
  { const: 'ND', title: 'North Dakota' },
  { const: 'OH', title: 'Ohio' },
  { const: 'OK', title: 'Oklahoma' },
  { const: 'OR', title: 'Oregon' },
  { const: 'PA', title: 'Pennsylvania' },
  { const: 'RI', title: 'Rhode Island' },
  { const: 'SC', title: 'South Carolina' },
  { const: 'SD', title: 'South Dakota' },
  { const: 'TN', title: 'Tennessee' },
  { const: 'TX', title: 'Texas' },
  { const: 'UT', title: 'Utah' },
  { const: 'VT', title: 'Vermont' },
  { const: 'VA', title: 'Virginia' },
  { const: 'WA', title: 'Washington' },
  { const: 'WV', title: 'West Virginia' },
  { const: 'WI', title: 'Wisconsin' },
  { const: 'WY', title: 'Wyoming' }
];

const AddressFields: Partial<SchemaBlock>[] = [
  {
    id: 'attn',
    type: 'string',
    title: 'Attn/CO',
    description: 'Attention or Care Of',
    maxLength: 255
  },
  {
    id: 'address_1',
    type: 'string',
    title: 'Address',
    description: 'Primary address line',
    maxLength: 255,
    required: true
  },
  {
    id: 'address_2',
    type: 'string',
    title: 'STE/APT/FL',
    description: 'Suite, Apartment, or Floor',
    maxLength: 255
  },
  {
    id: 'city',
    type: 'string',
    title: 'City',
    description: 'City name',
    maxLength: 63,
    required: true
  },
  {
    id: 'state',
    type: 'enum',
    title: 'State',
    description: 'US State',
    oneOf: US_STATES,
    required: true
  },
  {
    id: 'zip_code',
    type: 'string',
    title: 'Zip Code',
    description: '5-digit ZIP code',
    pattern: '^[0-9]{5}$',
    required: true
  },
  {
    id: 'zip_plus_4',
    type: 'string',
    title: 'Zip+4',
    description: '4-digit ZIP+4 extension',
    pattern: '^[0-9]{4}$'
  },
  {
    id: 'country',
    type: 'string',
    title: 'Country',
    description: 'Country code',
    const: 'US',
    maxLength: 31,
    required: true
  }
];

// Predefined field block groups
const PREDEFINED_FIELD_BLOCKS: Record<
  string,
  { title: string; description: string; fields: Partial<SchemaBlock>[] }
> = {
  primary_address: {
    title: 'Primary Address',
    description: 'Complete address information with validation',
    fields: AddressFields
  },
  company: {
    title: 'Company',
    description: 'Company information with address',
    fields: [
      {
        id: 'company_name',
        type: 'string',
        title: 'Company Name',
        description: 'Legal company name',
        maxLength: 256,
        required: true
      },
      ...AddressFields
    ]
  }
};

// Enhanced block templates with Draft-07 features
const BLOCK_TEMPLATES: Record<string, Partial<SchemaBlock>> = {
  string: {
    type: 'string',
    title: 'Text Field',
    description: 'A text input field'
  },
  number: {
    type: 'number',
    title: 'Number Field',
    description: 'A numeric input field'
  },
  integer: {
    type: 'integer',
    title: 'Integer Field',
    description: 'A whole number field'
  },
  boolean: {
    type: 'boolean',
    title: 'Checkbox',
    description: 'A true/false checkbox'
  },
  enum: {
    type: 'enum',
    title: 'Dropdown',
    description: 'A dropdown selection field',
    oneOf: [
      { const: 'option1', title: 'Option 1' },
      { const: 'option2', title: 'Option 2' }
    ]
  },
  array: {
    type: 'array',
    title: 'List',
    description: 'A list of items',
    items: {
      id: 'temp',
      type: 'string',
      title: 'Item'
    }
  },
  object: {
    type: 'object',
    title: 'Object',
    description: 'A group of related fields',
    properties: {}
  },
  null: {
    type: 'null',
    title: 'Null Field',
    description: 'A null value field'
  }
};

// Format templates for string fields
const FORMAT_TEMPLATES = {
  email: {
    format: 'email',
    title: 'Email Address',
    pattern: '^[\\w\\.-]+@[\\w\\.-]+\\.[a-zA-Z]{2,}$'
  },
  uri: { format: 'uri', title: 'URL', pattern: '^https?:\\/\\/' },
  date: { format: 'date', title: 'Date', pattern: '^\\d{4}-\\d{2}-\\d{2}$' },
  'date-time': {
    format: 'date-time',
    title: 'Date & Time',
    pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}'
  },
  time: { format: 'time', title: 'Time', pattern: '^\\d{2}:\\d{2}:\\d{2}$' },
  uuid: {
    format: 'uuid',
    title: 'UUID',
    pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
  },
  hostname: {
    format: 'hostname',
    title: 'Hostname',
    pattern: '^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$'
  },
  ipv4: {
    format: 'ipv4',
    title: 'IPv4 Address',
    pattern:
      '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'
  },
  ipv6: {
    format: 'ipv6',
    title: 'IPv6 Address',
    pattern: '^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$'
  }
};

function JsonSchemaEditor({ initialSchema, onChange }: JsonSchemaEditorProps) {
  const [blocks, setBlocks] = useState<SchemaBlock[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<
    'visual' | 'json' | 'validation' | 'conditionals' | 'form'
  >('visual');
  const [expandedBlocks, setExpandedBlocks] = useState<Set<string>>(new Set());
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [conditionalRules, setConditionalRules] = useState<ConditionalRule[]>(
    []
  );
  const [blockTab, setBlockTab] = useState<'single' | 'predefined'>('single');

  // Generate unique ID for blocks
  const generateId = useCallback(() => {
    return Math.random().toString(36).substr(2, 9);
  }, []);

  // Add a new block
  const addBlock = useCallback(
    (templateType: string) => {
      const template = BLOCK_TEMPLATES[templateType];
      const newBlock: SchemaBlock = {
        id: generateId(),
        ...template,
        title: template.title || 'New Field',
        description: template.description || ''
      } as SchemaBlock;

      setBlocks((prev) => [...prev, newBlock]);
      setSelectedBlock(newBlock.id);
    },
    [generateId]
  );

  // Check if a predefined block type already exists
  const hasPredefinedBlockType = useCallback(
    (blockType: string) => {
      const predefinedBlock = PREDEFINED_FIELD_BLOCKS[blockType];
      if (!predefinedBlock) return false;

      // Check if any existing block has the same field IDs as this predefined block
      return blocks.some((block) =>
        predefinedBlock.fields.some((field) => field.id === block.id)
      );
    },
    [blocks]
  );

  // Add predefined field blocks
  const addPredefinedFieldBlock = useCallback(
    (blockType: string) => {
      const predefinedBlock = PREDEFINED_FIELD_BLOCKS[blockType];
      if (!predefinedBlock) return;

      // Check if this predefined block type already exists
      if (hasPredefinedBlockType(blockType)) {
        alert(
          `${predefinedBlock.title} block already exists. You can only add each predefined block once.`
        );
        return;
      }

      const groupId = generateId(); // Generate a unique group ID
      const newBlocks: SchemaBlock[] = predefinedBlock.fields.map((field) => ({
        id: generateId(),
        ...field,
        title: field.title || 'New Field',
        description: field.description || '',
        groupId: groupId // Assign the same group ID to all fields in this group
      })) as SchemaBlock[];

      setBlocks((prev) => [...prev, ...newBlocks]);
      if (newBlocks.length > 0) {
        setSelectedBlock(newBlocks[0].id);
        // Expand the group by default when it's first added
        setExpandedGroups((prev) => {
          const newSet = new Set(prev);
          newSet.add(groupId);
          return newSet;
        });
      }
    },
    [generateId, hasPredefinedBlockType]
  );

  // Update a block
  const updateBlock = useCallback(
    (id: string, updates: Partial<SchemaBlock>) => {
      setBlocks((prev) =>
        prev.map((block) =>
          block.id === id ? { ...block, ...updates } : block
        )
      );
    },
    []
  );

  // Delete a block
  const deleteBlock = useCallback(
    (id: string) => {
      const blockToDelete = blocks.find((block) => block.id === id);

      // If this block is part of a predefined group, delete the entire group
      if (blockToDelete?.groupId) {
        const groupId = blockToDelete.groupId;
        setBlocks((prev) => prev.filter((block) => block.groupId !== groupId));

        // Remove from expanded groups if it was expanded
        setExpandedGroups((prev) => {
          const newSet = new Set(prev);
          newSet.delete(groupId);
          return newSet;
        });

        // Clear selection if the selected block was in this group
        if (
          selectedBlock &&
          blocks.find((b) => b.id === selectedBlock)?.groupId === groupId
        ) {
          setSelectedBlock(null);
        }
      } else {
        // For individual blocks, delete just that block
        setBlocks((prev) => prev.filter((block) => block.id !== id));
        if (selectedBlock === id) {
          setSelectedBlock(null);
        }
      }
    },
    [selectedBlock, blocks]
  );

  // Toggle block expansion
  const toggleExpanded = useCallback((id: string) => {
    setExpandedBlocks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  // Toggle group expansion
  const toggleGroupExpanded = useCallback((groupId: string) => {
    setExpandedGroups((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(groupId)) {
        newSet.delete(groupId);
      } else {
        newSet.add(groupId);
      }
      return newSet;
    });
  }, []);

  // Group blocks by groupId for visual display
  const groupedBlocks = useCallback(() => {
    const groups: {
      [groupId: string]: { blocks: SchemaBlock[]; groupType: string };
    } = {};
    const ungroupedBlocks: SchemaBlock[] = [];

    blocks.forEach((block) => {
      if (block.groupId) {
        if (!groups[block.groupId]) {
          // Determine group type by checking which predefined block this field belongs to
          let groupType = 'Field Group';
          Object.entries(PREDEFINED_FIELD_BLOCKS).forEach(
            ([, predefinedBlock]) => {
              if (
                predefinedBlock.fields.some((field) => field.id === block.id)
              ) {
                groupType = predefinedBlock.title;
              }
            }
          );

          groups[block.groupId] = { blocks: [], groupType };
        }
        groups[block.groupId].blocks.push(block);
      } else {
        ungroupedBlocks.push(block);
      }
    });

    return { groups, ungroupedBlocks };
  }, [blocks]);

  // Add conditional rule
  const addConditionalRule = useCallback(() => {
    const newRule: ConditionalRule = {
      id: generateId(),
      name: 'New Rule',
      condition: {
        fieldId: '',
        operator: 'equals',
        value: ''
      },
      action: {
        type: 'require_field',
        fieldId: ''
      }
    };

    setConditionalRules((prev) => [...prev, newRule]);
  }, [generateId]);

  // Update conditional rule
  const updateConditionalRule = useCallback(
    (ruleId: string, updates: Partial<ConditionalRule>) => {
      setConditionalRules((prev) =>
        prev.map((rule) =>
          rule.id === ruleId ? { ...rule, ...updates } : rule
        )
      );
    },
    []
  );

  // Delete conditional rule
  const deleteConditionalRule = useCallback((ruleId: string) => {
    setConditionalRules((prev) => prev.filter((rule) => rule.id !== ruleId));
  }, []);

  // Validate schema
  const validateSchema = useCallback((schema: any): string[] => {
    const errors: string[] = [];

    // Basic validation
    if (
      !schema.type &&
      !schema.allOf &&
      !schema.anyOf &&
      !schema.oneOf &&
      !schema.not
    ) {
      errors.push('Schema must have a type or composition keyword');
    }

    // String validations
    if (schema.type === 'string') {
      if (schema.minLength !== undefined && schema.minLength < 0) {
        errors.push('minLength must be non-negative');
      }
      if (schema.maxLength !== undefined && schema.maxLength < 0) {
        errors.push('maxLength must be non-negative');
      }
      if (
        schema.minLength !== undefined &&
        schema.maxLength !== undefined &&
        schema.minLength > schema.maxLength
      ) {
        errors.push('minLength cannot be greater than maxLength');
      }
    }

    // Number validations
    if (schema.type === 'number' || schema.type === 'integer') {
      if (
        schema.minimum !== undefined &&
        schema.exclusiveMinimum !== undefined
      ) {
        errors.push('Cannot use both minimum and exclusiveMinimum');
      }
      if (
        schema.maximum !== undefined &&
        schema.exclusiveMaximum !== undefined
      ) {
        errors.push('Cannot use both maximum and exclusiveMaximum');
      }
      if (
        schema.minimum !== undefined &&
        schema.maximum !== undefined &&
        schema.minimum > schema.maximum
      ) {
        errors.push('minimum cannot be greater than maximum');
      }
      if (schema.multipleOf !== undefined && schema.multipleOf <= 0) {
        errors.push('multipleOf must be positive');
      }
    }

    // Array validations
    if (schema.type === 'array') {
      if (schema.minItems !== undefined && schema.minItems < 0) {
        errors.push('minItems must be non-negative');
      }
      if (schema.maxItems !== undefined && schema.maxItems < 0) {
        errors.push('maxItems must be non-negative');
      }
      if (
        schema.minItems !== undefined &&
        schema.maxItems !== undefined &&
        schema.minItems > schema.maxItems
      ) {
        errors.push('minItems cannot be greater than maxItems');
      }
    }

    // Object validations
    if (schema.type === 'object') {
      if (schema.minProperties !== undefined && schema.minProperties < 0) {
        errors.push('minProperties must be non-negative');
      }
      if (schema.maxProperties !== undefined && schema.maxProperties < 0) {
        errors.push('maxProperties must be non-negative');
      }
      if (
        schema.minProperties !== undefined &&
        schema.maxProperties !== undefined &&
        schema.minProperties > schema.maxProperties
      ) {
        errors.push('minProperties cannot be greater than maxProperties');
      }
    }

    return errors;
  }, []);

  // Convert blocks to JSON Schema Draft-07
  const generateJsonSchema = useCallback(() => {
    const convertBlockToSchema = (block: SchemaBlock): any => {
      const schema: any = {
        $schema: 'http://json-schema.org/draft-07/schema#',
        title: block.title,
        type: block.type
      };

      if (block.description) {
        schema.description = block.description;
      }

      // String validations
      if (block.type === 'string') {
        if (block.minLength !== undefined) schema.minLength = block.minLength;
        if (block.maxLength !== undefined) schema.maxLength = block.maxLength;
        if (block.pattern) schema.pattern = block.pattern;
        if (block.format) schema.format = block.format;
      }

      // Number validations
      if (block.type === 'number' || block.type === 'integer') {
        if (block.minimum !== undefined) schema.minimum = block.minimum;
        if (block.maximum !== undefined) schema.maximum = block.maximum;
        if (block.exclusiveMinimum !== undefined)
          schema.exclusiveMinimum = block.exclusiveMinimum;
        if (block.exclusiveMaximum !== undefined)
          schema.exclusiveMaximum = block.exclusiveMaximum;
        if (block.multipleOf !== undefined)
          schema.multipleOf = block.multipleOf;
      }

      // Array validations
      if (block.type === 'array') {
        if (block.minItems !== undefined) schema.minItems = block.minItems;
        if (block.maxItems !== undefined) schema.maxItems = block.maxItems;
        if (block.uniqueItems !== undefined)
          schema.uniqueItems = block.uniqueItems;
        if (block.items) {
          schema.items = convertBlockToSchema(block.items);
        }
      }

      // Object validations
      if (block.type === 'object') {
        if (block.minProperties !== undefined)
          schema.minProperties = block.minProperties;
        if (block.maxProperties !== undefined)
          schema.maxProperties = block.maxProperties;
        if (block.additionalProperties !== undefined)
          schema.additionalProperties = block.additionalProperties;
        if (block.requiredProperties)
          schema.required = block.requiredProperties;
        if (block.properties) {
          schema.properties = {};
          Object.entries(block.properties).forEach(([key, value]) => {
            schema.properties[key] = convertBlockToSchema(value);
          });
        }
      }

      // Enum validations
      if (block.type === 'enum' && block.oneOf) {
        schema.oneOf = block.oneOf;
      }

      // Conditional validations
      if (block.if) schema.if = convertBlockToSchema(block.if);
      if (block.then) schema.then = convertBlockToSchema(block.then);
      if (block.else) schema.else = convertBlockToSchema(block.else);

      // Schema composition
      if (block.allOf) schema.allOf = block.allOf.map(convertBlockToSchema);
      if (block.anyOf) schema.anyOf = block.anyOf.map(convertBlockToSchema);
      if (block.not) schema.not = convertBlockToSchema(block.not);

      // Metadata
      if (block.examples) schema.examples = block.examples;
      if (block.default !== undefined) schema.default = block.default;
      if (block.const !== undefined) schema.const = block.const;
      if (block.readOnly !== undefined) schema.readOnly = block.readOnly;
      if (block.writeOnly !== undefined) schema.writeOnly = block.writeOnly;
      if (block.deprecated !== undefined) schema.deprecated = block.deprecated;

      return schema;
    };

    if (blocks.length === 0) {
      return {
        $schema: 'http://json-schema.org/draft-07/schema#',
        type: 'object',
        properties: {}
      };
    }

    if (blocks.length === 1) {
      const schema = convertBlockToSchema(blocks[0]);

      // Add conditional rules using root-level if/then structure
      if (conditionalRules.length > 0) {
        const firstRule = conditionalRules[0];
        const conditionField = blocks.find(
          (b) => b.id === firstRule.condition.fieldId
        );

        if (conditionField) {
          // Build the condition schema
          const conditionSchema: any = {
            properties: {
              [conditionField.title.toLowerCase().replace(/\s+/g, '_')]:
                buildConditionValue(firstRule.condition)
            },
            required: [conditionField.title.toLowerCase().replace(/\s+/g, '_')]
          };

          // Build the then schema based on action type
          const { thenSchema } = buildActionSchemas(
            firstRule,
            blocks,
            convertBlockToSchema
          );

          if (thenSchema && Object.keys(thenSchema).length > 0) {
            schema.if = conditionSchema;
            schema.then = thenSchema;
          }
        }
      }

      return schema;
    }

    // Identify fields that are conditionally shown/hidden
    const conditionallyShownFields = new Set<string>();
    const conditionallyHiddenFields = new Set<string>();

    conditionalRules.forEach((rule) => {
      if (rule.action.type === 'show_field' && rule.action.fieldId) {
        const targetField = blocks.find((b) => b.id === rule.action.fieldId);
        if (targetField) {
          conditionallyShownFields.add(
            targetField.title.toLowerCase().replace(/\s+/g, '_')
          );
        }
      }
      if (rule.action.type === 'hide_field' && rule.action.fieldId) {
        const targetField = blocks.find((b) => b.id === rule.action.fieldId);
        if (targetField) {
          conditionallyHiddenFields.add(
            targetField.title.toLowerCase().replace(/\s+/g, '_')
          );
        }
      }
    });

    // Collect required fields from blocks
    const requiredFields: string[] = [];
    const properties: Record<string, any> = {};

    blocks.forEach((block) => {
      const fieldName = block.title.toLowerCase().replace(/\s+/g, '_');
      properties[fieldName] = convertBlockToSchema(block);

      // Add to required fields if the block is marked as required
      if (block.required) {
        requiredFields.push(fieldName);
      }
    });

    const baseSchema: any = {
      $schema: 'http://json-schema.org/draft-07/schema#',
      type: 'object',
      properties
    };

    // Add required fields if any exist
    if (requiredFields.length > 0) {
      baseSchema.required = requiredFields;
    }

    // Add conditional rules using root-level if/then structure
    if (conditionalRules.length > 0) {
      // For now, handle the first conditional rule at root level
      // Multiple rules would need to be combined differently
      const firstRule = conditionalRules[0];
      const conditionField = blocks.find(
        (b) => b.id === firstRule.condition.fieldId
      );

      if (conditionField) {
        // Build the condition schema
        const conditionSchema: any = {
          properties: {
            [conditionField.title.toLowerCase().replace(/\s+/g, '_')]:
              buildConditionValue(firstRule.condition)
          },
          required: [conditionField.title.toLowerCase().replace(/\s+/g, '_')]
        };

        // Build the then schema based on action type
        const { thenSchema } = buildActionSchemas(
          firstRule,
          blocks,
          convertBlockToSchema
        );

        if (thenSchema && Object.keys(thenSchema).length > 0) {
          baseSchema.if = conditionSchema;
          baseSchema.then = thenSchema;
        }
      }
    }

    return baseSchema;
  }, [blocks, conditionalRules]);

  // Helper function to build condition values based on operator
  const buildConditionValue = (condition: ConditionalRule['condition']) => {
    switch (condition.operator) {
      case 'equals':
        return { const: condition.value };
      case 'not_equals':
        return { not: { const: condition.value } };
      case 'contains':
        return { pattern: `.*${condition.value}.*` };
      case 'greater_than':
        return { minimum: condition.value, exclusiveMinimum: true };
      case 'less_than':
        return { maximum: condition.value, exclusiveMaximum: true };
      default:
        return { const: condition.value };
    }
  };

  // Helper function to build action schemas
  const buildActionSchemas = (
    rule: ConditionalRule,
    blocks: SchemaBlock[],
    convertBlockToSchema: (block: SchemaBlock) => any
  ) => {
    const thenSchema: any = {};
    const elseSchema: any = {};

    const targetField = rule.action.fieldId
      ? blocks.find((b) => b.id === rule.action.fieldId)
      : null;
    const targetFieldName = targetField
      ? targetField.title.toLowerCase().replace(/\s+/g, '_')
      : '';

    switch (rule.action.type) {
      case 'require_field':
        if (targetField) {
          thenSchema.required = [targetFieldName];
        }
        break;

      case 'show_field':
        if (targetField) {
          // For show_field, make the field required in the then clause
          thenSchema.required = [targetFieldName];
        }
        break;

      case 'hide_field':
        if (targetField) {
          // For hide_field, exclude the field from properties
          elseSchema.properties = {
            [targetFieldName]: { not: {} }
          };
        }
        break;

      case 'set_value':
        if (targetField && rule.action.value !== undefined) {
          thenSchema.properties = {
            [targetFieldName]: { const: rule.action.value }
          };
        }
        break;
    }

    return { thenSchema, elseSchema };
  };

  // Call onChange when schema changes (debounced)
  useEffect(() => {
    if (onChange) {
      const timeoutId = setTimeout(() => {
        onChange(generateJsonSchema());
      }, 300); // Debounce for 300ms

      return () => clearTimeout(timeoutId);
    }
  }, [blocks, conditionalRules, onChange, generateJsonSchema]);

  // Get icon for block type
  const getBlockIcon = (type: string) => {
    switch (type) {
      case 'string':
        return <Type className="w-4 h-4" />;
      case 'number':
        return <Hash className="w-4 h-4" />;
      case 'integer':
        return <Hash className="w-4 h-4" />;
      case 'boolean':
        return <CheckSquare className="w-4 h-4" />;
      case 'array':
        return <List className="w-4 h-4" />;
      case 'object':
        return <Map className="w-4 h-4" />;
      case 'enum':
        return <Settings className="w-4 h-4" />;
      case 'null':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Type className="w-4 h-4" />;
    }
  };

  // Get format icon
  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'email':
        return <Mail className="w-4 h-4" />;
      case 'uri':
        return <Globe className="w-4 h-4" />;
      case 'date':
      case 'date-time':
      case 'time':
        return <Calendar className="w-4 h-4" />;
      case 'uuid':
        return <CreditCard className="w-4 h-4" />;
      case 'hostname':
      case 'ipv4':
      case 'ipv6':
        return <Globe className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  // Block editor component
  const BlockEditor = React.memo(({ block }: { block: SchemaBlock }) => {
    const isExpanded = expandedBlocks.has(block.id);
    const isSelected = selectedBlock === block.id;

    return (
      <div
        className={cn(
          'border rounded-lg p-4 mb-2 transition-all',
          isSelected
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-950'
            : 'border-gray-200 dark:border-gray-700'
        )}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <GripVertical className="w-4 h-4 text-gray-400" />
            {getBlockIcon(block.type)}
            <span className="font-medium">{block.title}</span>
            <span className="text-sm text-gray-500">({block.type})</span>
            {block.format && (
              <div className="flex items-center gap-1 text-xs text-blue-600">
                {getFormatIcon(block.format)}
                <span>{block.format}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleExpanded(block.id)}
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedBlock(block.id)}
            >
              <Settings className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteBlock(block.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {isExpanded && (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={block.title}
                onChange={(e) =>
                  updateBlock(block.id, { title: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                value={block.description || ''}
                onChange={(e) =>
                  updateBlock(block.id, { description: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md"
                rows={2}
              />
            </div>

            {/* String validations */}
            {block.type === 'string' && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Format
                  </label>
                  <select
                    value={block.format || ''}
                    onChange={(e) => {
                      const format = e.target
                        .value as keyof typeof FORMAT_TEMPLATES;
                      const template = FORMAT_TEMPLATES[format];
                      updateBlock(block.id, {
                        format: format || undefined,
                        pattern: template?.pattern || block.pattern
                      });
                    }}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="">No format</option>
                    {Object.entries(FORMAT_TEMPLATES).map(([key, template]) => (
                      <option key={key} value={key}>
                        {template.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Min Length
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={block.minLength || ''}
                      onChange={(e) =>
                        updateBlock(block.id, {
                          minLength: e.target.value
                            ? Number(e.target.value)
                            : undefined
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Max Length
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={block.maxLength || ''}
                      onChange={(e) =>
                        updateBlock(block.id, {
                          maxLength: e.target.value
                            ? Number(e.target.value)
                            : undefined
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Pattern (Regex)
                  </label>
                  <input
                    type="text"
                    value={block.pattern || ''}
                    onChange={(e) =>
                      updateBlock(block.id, {
                        pattern: e.target.value || undefined
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="^[a-zA-Z0-9]+$"
                  />
                </div>
              </>
            )}

            {/* Number validations */}
            {(block.type === 'number' || block.type === 'integer') && (
              <>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Minimum
                    </label>
                    <input
                      type="number"
                      value={block.minimum || ''}
                      onChange={(e) =>
                        updateBlock(block.id, {
                          minimum: e.target.value
                            ? Number(e.target.value)
                            : undefined
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Maximum
                    </label>
                    <input
                      type="number"
                      value={block.maximum || ''}
                      onChange={(e) =>
                        updateBlock(block.id, {
                          maximum: e.target.value
                            ? Number(e.target.value)
                            : undefined
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Exclusive Min
                    </label>
                    <input
                      type="number"
                      value={block.exclusiveMinimum || ''}
                      onChange={(e) =>
                        updateBlock(block.id, {
                          exclusiveMinimum: e.target.value
                            ? Number(e.target.value)
                            : undefined
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Exclusive Max
                    </label>
                    <input
                      type="number"
                      value={block.exclusiveMaximum || ''}
                      onChange={(e) =>
                        updateBlock(block.id, {
                          exclusiveMaximum: e.target.value
                            ? Number(e.target.value)
                            : undefined
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Multiple Of
                  </label>
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={block.multipleOf || ''}
                    onChange={(e) =>
                      updateBlock(block.id, {
                        multipleOf: e.target.value
                          ? Number(e.target.value)
                          : undefined
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              </>
            )}

            {/* Array validations */}
            {block.type === 'array' && (
              <>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Min Items
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={block.minItems || ''}
                      onChange={(e) =>
                        updateBlock(block.id, {
                          minItems: e.target.value
                            ? Number(e.target.value)
                            : undefined
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Max Items
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={block.maxItems || ''}
                      onChange={(e) =>
                        updateBlock(block.id, {
                          maxItems: e.target.value
                            ? Number(e.target.value)
                            : undefined
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={block.uniqueItems || false}
                    onChange={(e) =>
                      updateBlock(block.id, { uniqueItems: e.target.checked })
                    }
                    className="rounded"
                  />
                  <label className="text-sm font-medium">Unique Items</label>
                </div>
              </>
            )}

            {/* Object validations */}
            {block.type === 'object' && (
              <>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Min Properties
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={block.minProperties || ''}
                      onChange={(e) =>
                        updateBlock(block.id, {
                          minProperties: e.target.value
                            ? Number(e.target.value)
                            : undefined
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Max Properties
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={block.maxProperties || ''}
                      onChange={(e) =>
                        updateBlock(block.id, {
                          maxProperties: e.target.value
                            ? Number(e.target.value)
                            : undefined
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={block.additionalProperties !== false}
                    onChange={(e) =>
                      updateBlock(block.id, {
                        additionalProperties: e.target.checked
                      })
                    }
                    className="rounded"
                  />
                  <label className="text-sm font-medium">
                    Allow Additional Properties
                  </label>
                </div>
              </>
            )}

            {/* Enum validations */}
            {block.type === 'enum' && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Options
                </label>
                <div className="space-y-2">
                  {(block.oneOf || []).map((option, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={option.const}
                        onChange={(e) => {
                          const newOneOf = [...(block.oneOf || [])];
                          newOneOf[index] = {
                            ...option,
                            const: e.target.value
                          };
                          updateBlock(block.id, { oneOf: newOneOf });
                        }}
                        className="flex-1 px-3 py-2 border rounded-md"
                        placeholder="Value"
                      />
                      <input
                        type="text"
                        value={option.title}
                        onChange={(e) => {
                          const newOneOf = [...(block.oneOf || [])];
                          newOneOf[index] = {
                            ...option,
                            title: e.target.value
                          };
                          updateBlock(block.id, { oneOf: newOneOf });
                        }}
                        className="flex-1 px-3 py-2 border rounded-md"
                        placeholder="Display Name"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          const newOneOf = (block.oneOf || []).filter(
                            (_, i) => i !== index
                          );
                          updateBlock(block.id, { oneOf: newOneOf });
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const newOneOf = [
                        ...(block.oneOf || []),
                        { const: '', title: '' }
                      ];
                      updateBlock(block.id, { oneOf: newOneOf });
                    }}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Option
                  </Button>
                </div>
              </div>
            )}

            {/* Quick templates for enum */}
            {block.type === 'enum' && (
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Quick Templates
                </label>
                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateBlock(block.id, { oneOf: US_STATES })}
                  >
                    US States
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      updateBlock(block.id, {
                        oneOf: [
                          { const: 'yes', title: 'Yes' },
                          { const: 'no', title: 'No' }
                        ]
                      })
                    }
                  >
                    Yes/No
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      updateBlock(block.id, {
                        oneOf: [
                          { const: 'low', title: 'Low' },
                          { const: 'medium', title: 'Medium' },
                          { const: 'high', title: 'High' }
                        ]
                      })
                    }
                  >
                    Priority Levels
                  </Button>
                </div>
              </div>
            )}

            {/* Metadata */}
            <div className="border-t pt-3">
              <h4 className="font-medium mb-2">Metadata</h4>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Default Value
                  </label>
                  <input
                    type="text"
                    value={block.default || ''}
                    onChange={(e) =>
                      updateBlock(block.id, {
                        default: e.target.value || undefined
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Default value"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={block.readOnly || false}
                      onChange={(e) =>
                        updateBlock(block.id, { readOnly: e.target.checked })
                      }
                      className="rounded"
                    />
                    <label className="text-sm font-medium">Read Only</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={block.writeOnly || false}
                      onChange={(e) =>
                        updateBlock(block.id, { writeOnly: e.target.checked })
                      }
                      className="rounded"
                    />
                    <label className="text-sm font-medium">Write Only</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={block.deprecated || false}
                      onChange={(e) =>
                        updateBlock(block.id, { deprecated: e.target.checked })
                      }
                      className="rounded"
                    />
                    <label className="text-sm font-medium">Deprecated</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  });
  BlockEditor.displayName = 'BlockEditor';

  // Conditionals view component
  const ConditionalsView = () => {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">Conditional Validation Rules</h4>
          <Button variant="outline" size="sm" onClick={addConditionalRule}>
            <Plus className="w-4 h-4 mr-2" />
            Add Rule
          </Button>
        </div>

        {conditionalRules.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No conditional rules defined yet.</p>
            <p className="text-sm mt-1">
              Add rules to create dependencies between fields.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {conditionalRules.map((rule) => (
              <div
                key={rule.id}
                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border"
              >
                <div className="flex items-center justify-between mb-3">
                  <input
                    type="text"
                    value={rule.name}
                    onChange={(e) =>
                      updateConditionalRule(rule.id, { name: e.target.value })
                    }
                    className="font-medium bg-transparent border-none outline-none text-lg"
                    placeholder="Rule name"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteConditionalRule(rule.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      IF Field
                    </label>
                    <select
                      value={rule.condition.fieldId}
                      onChange={(e) =>
                        updateConditionalRule(rule.id, {
                          condition: {
                            ...rule.condition,
                            fieldId: e.target.value
                          }
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="">Select field...</option>
                      {blocks.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Operator
                    </label>
                    <select
                      value={rule.condition.operator}
                      onChange={(e) =>
                        updateConditionalRule(rule.id, {
                          condition: {
                            ...rule.condition,
                            operator: e.target.value as any
                          }
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="equals">Equals</option>
                      <option value="not_equals">Not Equals</option>
                      <option value="contains">Contains</option>
                      <option value="greater_than">Greater Than</option>
                      <option value="less_than">Less Than</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Value
                    </label>
                    <input
                      type="text"
                      value={rule.condition.value}
                      onChange={(e) =>
                        updateConditionalRule(rule.id, {
                          condition: {
                            ...rule.condition,
                            value: e.target.value as string | number | boolean
                          }
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Condition value"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      THEN Action
                    </label>
                    <select
                      value={rule.action.type}
                      onChange={(e) =>
                        updateConditionalRule(rule.id, {
                          action: {
                            ...rule.action,
                            type: e.target.value as any
                          }
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="require_field">Require Field</option>
                      <option value="hide_field">Hide Field</option>
                      <option value="show_field">Show Field</option>
                      <option value="set_value">Set Value</option>
                    </select>
                  </div>
                </div>

                {rule.action.type === 'require_field' && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-2">
                      Target Field
                    </label>
                    <select
                      value={rule.action.fieldId || ''}
                      onChange={(e) =>
                        updateConditionalRule(rule.id, {
                          action: { ...rule.action, fieldId: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="">Select target field...</option>
                      {blocks.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.title}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Rule Preview */}
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-md">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Rule:</strong> IF{' '}
                    {blocks.find((b) => b.id === rule.condition.fieldId)
                      ?.title || 'field'}{' '}
                    {rule.condition.operator} &quot;{rule.condition.value}&quot;
                    THEN {rule.action.type}{' '}
                    {blocks.find((b) => b.id === rule.action.fieldId)?.title ||
                      'field'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Validation view component
  const ValidationView = () => {
    const schema = generateJsonSchema();
    const errors = validateSchema(schema);

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          {errors.length === 0 ? (
            <>
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-green-600 font-medium">
                Schema is valid
              </span>
            </>
          ) : (
            <>
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-red-600 font-medium">
                {errors.length} validation error(s)
              </span>
            </>
          )}
        </div>

        {errors.length > 0 && (
          <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">
              Validation Errors:
            </h4>
            <ul className="space-y-1">
              {errors.map((error, index) => (
                <li
                  key={index}
                  className="text-sm text-red-700 dark:text-red-300"
                >
                  • {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <h4 className="font-medium mb-2">Schema Summary:</h4>
          <div className="text-sm space-y-1">
            <p>
              <strong>Draft:</strong> JSON Schema Draft-07
            </p>
            <p>
              <strong>Type:</strong> {schema.type}
            </p>
            <p>
              <strong>Blocks:</strong> {blocks.length}
            </p>
            {schema.properties && (
              <p>
                <strong>Properties:</strong>{' '}
                {Object.keys(schema.properties).length}
              </p>
            )}
            <p>
              <strong>Conditional Rules:</strong> {conditionalRules.length}
            </p>
          </div>
        </div>

        {/* Conditional Rules Summary */}
        {conditionalRules.length > 0 && (
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
              Conditional Validation Rules:
            </h4>
            <div className="space-y-2">
              {conditionalRules.map((rule) => {
                const conditionField = blocks.find(
                  (b) => b.id === rule.condition.fieldId
                );
                const targetField = blocks.find(
                  (b) => b.id === rule.action.fieldId
                );
                return (
                  <div key={rule.id} className="text-sm">
                    <p className="text-blue-600 dark:text-blue-400">
                      • <strong>{rule.name}:</strong> IF {conditionField?.title}{' '}
                      {rule.condition.operator} &quot;{rule.condition.value}
                      &quot; THEN {rule.action.type}{' '}
                      {targetField?.title || 'field'}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">
          JSON Schema Editor (Draft-07)
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Create JSON Schema Draft-07 compliant schemas using visual blocks with
          advanced validations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Block Palette */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg border p-4">
            <h3 className="font-semibold mb-4">Add Blocks</h3>

            {/* Block Type Tabs */}
            <div className="flex mb-4 border-b border-gray-200 dark:border-gray-600">
              <button
                className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
                  blockTab === 'single'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
                onClick={() => setBlockTab('single')}
              >
                Single Fields
              </button>
              <button
                className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
                  blockTab === 'predefined'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
                onClick={() => setBlockTab('predefined')}
              >
                Field Groups
              </button>
            </div>

            {/* Single Field Blocks */}
            {blockTab === 'single' && (
              <div className="space-y-2">
                {Object.entries(BLOCK_TEMPLATES).map(([type, template]) => (
                  <Button
                    key={type}
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => addBlock(type)}
                  >
                    {getBlockIcon(type)}
                    <span className="ml-2">{template.title}</span>
                  </Button>
                ))}
              </div>
            )}

            {/* Predefined Field Blocks */}
            {blockTab === 'predefined' && (
              <div className="space-y-3">
                {Object.entries(PREDEFINED_FIELD_BLOCKS).map(
                  ([type, blockGroup]) => {
                    const alreadyExists = hasPredefinedBlockType(type);

                    return (
                      <div
                        key={type}
                        className={`border rounded-lg p-3 ${
                          alreadyExists
                            ? 'border-green-200 dark:border-green-600 bg-green-50 dark:bg-green-900'
                            : 'border-gray-200 dark:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-sm flex items-center">
                            {blockGroup.title}
                            {alreadyExists && (
                              <span className="ml-2 text-xs bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                                Added
                              </span>
                            )}
                          </h4>
                          <Button
                            variant={alreadyExists ? 'secondary' : 'outline'}
                            size="sm"
                            onClick={() => addPredefinedFieldBlock(type)}
                            disabled={alreadyExists}
                            className="text-xs"
                          >
                            {alreadyExists ? 'Already Added' : 'Add All'}
                          </Button>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                          {blockGroup.description}
                        </p>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Fields:</span>{' '}
                          {blockGroup.fields.length}
                          <div className="mt-1">
                            {blockGroup.fields
                              .slice(0, 3)
                              .map((field, index) => (
                                <span key={index}>
                                  {field.title}
                                  {index <
                                    Math.min(blockGroup.fields.length, 3) - 1 &&
                                    ', '}
                                </span>
                              ))}
                            {blockGroup.fields.length > 3 && (
                              <span> +{blockGroup.fields.length - 3} more</span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </div>

        {/* Main Editor */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg border p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Schema Blocks</h3>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'visual' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('visual')}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Visual
                </Button>
                <Button
                  variant={viewMode === 'json' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('json')}
                >
                  <Code className="w-4 h-4 mr-2" />
                  JSON
                </Button>
                <Button
                  variant={viewMode === 'validation' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('validation')}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Validate
                </Button>
                <Button
                  variant={viewMode === 'conditionals' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('conditionals')}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Conditionals
                </Button>
                <Button
                  variant={viewMode === 'form' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('form')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Form Preview
                </Button>
              </div>
            </div>

            {viewMode === 'visual' ? (
              <div>
                {blocks.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p>
                      No blocks added yet. Click on a block type to get started!
                    </p>
                  </div>
                ) : (
                  <div>
                    {(() => {
                      const { groups, ungroupedBlocks } = groupedBlocks();
                      const elements: React.ReactElement[] = [];

                      // Render grouped blocks
                      Object.entries(groups).forEach(([groupId, groupData]) => {
                        const isExpanded = expandedGroups.has(groupId);

                        elements.push(
                          <div
                            key={groupId}
                            className="mb-6 border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div
                                className="flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 rounded p-2 -m-2 flex-1"
                                onClick={() => toggleGroupExpanded(groupId)}
                              >
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                                  {isExpanded ? (
                                    <ChevronDown className="w-4 h-4 mr-2" />
                                  ) : (
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                  )}
                                  <Map className="w-4 h-4 mr-2" />
                                  {groupData.groupType}
                                  <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                                    Predefined Group
                                  </span>
                                </h4>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto mr-4">
                                  {groupData.blocks.length} field
                                  {groupData.blocks.length !== 1 ? 's' : ''}
                                </span>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  if (
                                    confirm(
                                      `Are you sure you want to delete the entire ${groupData.groupType} group?`
                                    )
                                  ) {
                                    deleteBlock(groupData.blocks[0].id); // Delete any block from the group to trigger group deletion
                                  }
                                }}
                                className="text-xs text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900"
                              >
                                <Trash2 className="w-3 h-3 mr-1" />
                                Delete Group
                              </Button>
                            </div>
                            {isExpanded && (
                              <div className="space-y-2">
                                {groupData.blocks.map((block) => (
                                  <div key={block.id} className="ml-4">
                                    <BlockEditor block={block} />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      });

                      // Render ungrouped blocks
                      ungroupedBlocks.forEach((block) => {
                        elements.push(
                          <div key={block.id} className="mb-4">
                            <BlockEditor block={block} />
                          </div>
                        );
                      });

                      return elements;
                    })()}
                  </div>
                )}
              </div>
            ) : viewMode === 'json' ? (
              <div>
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-auto max-h-96">
                  <code>{JSON.stringify(generateJsonSchema(), null, 2)}</code>
                </pre>
              </div>
            ) : viewMode === 'validation' ? (
              <ValidationView />
            ) : viewMode === 'form' ? (
              <div>
                <JsonSchemaFormRenderer
                  schema={generateJsonSchema()}
                  onSubmit={(data) => {
                    console.log('Form submitted with data:', data);
                    alert('Form submitted! Check console for data.');
                  }}
                />
              </div>
            ) : (
              <ConditionalsView />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JsonSchemaEditor;
