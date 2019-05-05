export class FormDefinition {
    title: string;
    formId?: number;
    serviceEndpoint: string;
    tag: string;
    tabDefinitionList: Array<TabDefinition>;
}

export class TabDefinition {
    tabid: number;
    formId?: number;
    title: string;
    serviceEndPoint: string;
    groupList: Array<GroupDefinition>;
    entity: any;
    tag: string;
    formErrors?: any;
    showResetButton?: boolean;
}

export class GroupDefinition {
    groupid: number;
    title: string;
    noofcolumn?: number;
    mainClass?: string;
    columnDefenition: Array<ColumnDefinition>;
    formError?: any;
}

export class ColumnDefinition {
    columnid: number;
    columnKey?: string;
    entityDefinition: Array<FieldDefinition>;
    class?: string;
    title?: string;
}

export interface FieldDefinition {
    key: string;
    code?: string;
    type: string;
    isId?: boolean;
    label?: string;
    buttonLabel?: string;
    buttonName?: string;
    required?: boolean;
    options?: any;
    max?: number;
    min?: number;
    requiredTrue?: boolean;
    email?: any;
    minLength?: number;
    maxLength?: number;
    pattern?: any;
    nullValidator?: any;
    disabled?: boolean;
    customValidator?: any;
    readonly?: boolean;
    filterBy?: string;
    filterValue?: string;
    showTime?: boolean;
    timeOnly?: boolean;
    hideLabel?: boolean;
    fieldClass?: any;
    fieldStyle?: {
        [key: string]: string;
    };
    fieldWrapperClass?: string;
    fieldWrapperStyle?: {
        [key: string]: string;
    };
    labelClass?: string;
    elementClass?: string;
    inputStyle?: string;
    enableFilter?: boolean;
    hideField?: boolean;
    autoDisplayFirst?: boolean;
    secondLanguageDirection?: boolean;
    nonDecimal?: boolean;
    noOfDecimalPlaces?: number;
    isHorizontal?: boolean;
    group?: string;
    value?: number;
    inputId?: string;
    entityDefinition?: Array<FieldDefinition>;
}

