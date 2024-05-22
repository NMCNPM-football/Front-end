export const CONTAINS = 'contains';
export const NOT_CONTAINS = 'not_contains';
export const EQUALS = '=';
export const NOT_EQUALS = '!=';
export const EXISTS = 'exists';
export const NOT_EXISTS = 'not_exist';
export const IN = 'IN';
export const BETWEEN = 'BETWEEN';

export const whereValue =  {
  PREDOMINANTLY: 'predominantly',
  AT_LEAST: 'at least',
};

export const hourValue = {
  '12_AM': '12_AM',
  '1_AM': '1_AM',
  '2_AM': '2_AM',
  '3_AM': '3_AM',
  '4_AM': '4_AM',
  '5_AM': '5_AM',
  '6_AM': '6_AM',
  '7_AM': '7_AM',
  '8_AM': '8_AM',
  '9_AM': '9_AM',
  '10_AM': '10_AM',
  '11_AM': '11_AM',
  '12_PM': '12_PM',
  '1_PM': '1_PM',
  '2_PM': '2_PM',
  '3_PM': '3_PM',
  '4_PM': '4_PM',
  '5_PM': '5_PM',
  '6_PM': '6_PM',
  '7_PM': '7_PM',
  '8_PM': '8_PM',
  '9_PM': '9_PM',
  '10_PM': '10_PM',
  '11_PM': '11_PM',
};

export const roleOptions = [
  {
    name: 'Admin',
    fieldKey: 'Admin',
  },
  {
    name: 'Editor',
    fieldKey: 'Editor',
  },
  {
    name: 'Viewer',
    fieldKey: 'Viewer',
  }
]

export const propertyInputType = {
  USER_PROPERTIES: 'User Properties',
  DEMOGRAPHICS: 'Demographics',
  GEOGRAPHY: 'Geography',
  TECHNOGRAPHICS: 'Technographics',
  SUBSCRIPTION_GROUP: 'Subscription Group',
  REACHABILITY: 'Reachability',
  APP_FIELDS: 'App Fields',
  SEGMENTS: 'Segments',
};

export default {
  FIELD_CHART_TYPE: "chart_type",
  FIELD_CHART_NAME: "chart_name",
  FIELD_GROUP_BY: "group_by",
  FIELD_GLOBAL_FILTERS: "global_filters",
  FIELD_ORDER_BY: "order_by",
  FIELD_METRIC: "metric",
  FIELD_DIMENSION: "dimension",
  FIELD_NAME: "name",

  CHART_TYPE_KPI: "kpi",
  CHART_NAME_KPI_CHART_ID: "kpi_1",
  CHART_TYPE_LINECHART: "line_chart",
  CHART_NAME_LINECHART_CHART_ID: "line_chart_1",
  CHART_TYPE_BARCHART: "bar_chart",
  CHART_NAME_BARCHART_CHART_ID: "bar_chart_1",
  CHART_TYPE_STACKEDCHART: "stacked_chart",
  CHART_NAME_STACKEDCHART_CHART_ID: "stacked_chart_1",
  CHART_DATE_FIELD: "date_key",
  CHART_KPI_METRIC: [
    { displayedName: "Session", name: "session" },
    { displayedName: "User", name: "user" },
  ],
  SEGMENT_EVENT_TYPE: "event_type",
  SEGMENT_EVENT_PROPERTIES: "event_properties",
  SEGMENT_CAMPAIGN_FIELD: "campaign",
  OPERATOR_EQUAL: "=",
  OPERATOR_CONTAIN: "contains",

  OPERATORS: [
    {
      text: '∋ (contains)',
      value: CONTAINS,
    },
    {
      text: '∌ (does not contain)',
      value: NOT_CONTAINS,
    },
    {
      text: '= (equals)',
      value: EQUALS,
    },
    {
      text: '≠ (not equals)',
      value: NOT_EQUALS,
    },
    {
      text: '∃ (exists)',
      value: EXISTS,
    },
    {
      text: '∄ (does not exist)',
      value: NOT_EXISTS,
    },
  ],
  DAY_OF_WEEK_OPTIONS: [
    {
      text: 'Sunday',
      value: 'sunday',
    },
    {
      text: 'Monday',
      value: 'monday',
    },
    {
      text: 'Tuesday',
      value: 'tuesday',
    },
    {
      text: 'Wednesday',
      value: 'wednesday',
    },
    {
      text: 'Thursday',
      value: 'thursday',
    },
    {
      text: 'Friday',
      value: 'friday',
    },
    {
      text: 'Saturday',
      value: 'saturday',
    },
  ],
  HOUR_OPTIONS: [
    {
      text: '12 AM',
      value: hourValue['12_AM'],
    },
    {
      text: '1 AM',
      value: hourValue['1_AM'],
    },
    {
      text: '2 AM',
      value: hourValue['2_AM'],
    },
    {
      text: '3 AM',
      value: hourValue['3_AM'],
    },
    {
      text: '4 AM',
      value: hourValue['4_AM'],
    },
    {
      text: '5 AM',
      value: hourValue['5_AM'],
    },
    {
      text: '6 AM',
      value: hourValue['6_AM'],
    },
    {
      text: '7 AM',
      value: hourValue['7_AM'],
    },
    {
      text: '8 AM',
      value: hourValue['8_AM'],
    },
    {
      text: '9 AM',
      value: hourValue['9_AM'],
    },
    {
      text: '10 AM',
      value: hourValue['10_AM'],
    },
    {
      text: '11 AM',
      value: hourValue['11_AM'],
    },
    {
      text: '12 PM',
      value: hourValue['12_PM'],
    },
    {
      text: '1 PM',
      value: hourValue['1_PM'],
    },
    {
      text: '2 PM',
      value: hourValue['2_PM'],
    },
    {
      text: '3 PM',
      value: hourValue['3_PM'],
    },
    {
      text: '4 PM',
      value: hourValue['4_PM'],
    },
    {
      text: '5 PM',
      value: hourValue['5_PM'],
    },
    {
      text: '6 PM',
      value: hourValue['6_PM'],
    },
    {
      text: '7 PM',
      value: hourValue['7_PM'],
    },
    {
      text: '8 PM',
      value: hourValue['8_PM'],
    },
    {
      text: '9 PM',
      value: hourValue['9_PM'],
    },
    {
      text: '10 PM',
      value: hourValue['10_PM'],
    },
    {
      text: '11 PM',
      value: hourValue['11_PM'],
    },
  ],
  FREQUENCY_OPTIONS: [
    {
      text: 'predominantly',
      value: whereValue.PREDOMINANTLY,
    },
    {
      text: 'at least',
      value: whereValue.AT_LEAST,
    },
  ],
  COMMON_PROPERTY_OPTIONS: [
    {
      text: 'User Properties',
      value: propertyInputType.USER_PROPERTIES,
    },
    // {
    //   text: 'Demographics',
    //   value: types.DEMOGRAPHICS,
    // },
    // {
    //   text: 'Geography',
    //   value: types.GEOGRAPHY,
    // },
    // {
    //   text: 'Technographics',
    //   value: types.TECHNOGRAPHICS,
    // },
    // {
    //   text: 'Reachability',
    //   value: types.REACHABILITY,
    // },
    // {
    //   text: 'App Fields',
    //   value: types.APP_FIELDS,
    // },
    // {
    //   text: 'Segments',
    //   value: types.SEGMENTS,
    // },
  ],
}




