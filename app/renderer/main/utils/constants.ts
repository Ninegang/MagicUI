import {createHashHistory} from 'history';
import {
  faCircle,
  faEdit,
  faImage,
  faInbox,
  faMobile,
  faSquare,
  faWindowMaximize
} from '@fortawesome/free-solid-svg-icons';

export const Routers = {
  MAIN: '/',
  UI_EDITOR: '/ui_editor',
  CODE_EDITOR: '/code_editor'
};

export const history = createHashHistory();

export const COMPONENT_TYPES = {
  LAYER: {

  },
  BUTTON: {
    CUSTOM_BUTTON: 'custom_button',
  },
  INPUT: {
    CUSTOM_INPUT: 'custom_input'
  },
  SHAPE: {
    RECT: 'rect',
    CIRCLE: 'circle',
  },
  WIDGET: {
    PC_WIDGET: 'pc_widget',
    MOBILE_WIDGET: 'mobile_widget'
  },
  TEXT: {
    LABEL: 'label',
    CUSTOM_TEXT: 'text'
  },
  IMAGE: {
    CUSTOM_IMAGE: 'custom_image'
  }
};


export const TYPES = Object.keys(COMPONENT_TYPES).reduce((acc, cur) => {
  (acc as any)[cur] = cur;
  return acc;
}, {}) as any;

export const ComponentFoldConfig = [
  {
    type: TYPES.SHAPE,
    children: [
      {
        name: COMPONENT_TYPES.SHAPE.RECT,
        icon: faSquare
      },
      {
        name: COMPONENT_TYPES.SHAPE.CIRCLE,
        icon: faCircle
      }
    ]
  },
  {
    type: TYPES.WIDGET,
    children: [
      {
        name: COMPONENT_TYPES.WIDGET.PC_WIDGET,
        icon: faWindowMaximize
      },
      {
        name: COMPONENT_TYPES.WIDGET.MOBILE_WIDGET,
        icon: faMobile
      }
    ]
  },
  {
    type: '',
    children: []
  },
  {
    type: TYPES.BUTTON,
    children: [
      {
        name: COMPONENT_TYPES.BUTTON.CUSTOM_BUTTON,
        icon: faEdit
      }
    ]
  },
  {
    type: TYPES.INPUT,
    children: [
      {
        name: COMPONENT_TYPES.INPUT.CUSTOM_INPUT,
        icon: faInbox
      }
    ]
  },
  {
    type: TYPES.TEXT,
    children: [
      {
        name: COMPONENT_TYPES.TEXT.LABEL,
        icon: faEdit
      },
      {
        name: COMPONENT_TYPES.TEXT.CUSTOM_TEXT,
        icon: faEdit
      }
    ]
  },
  {
    type: TYPES.IMAGE,
    children: [
      {
        name: COMPONENT_TYPES.IMAGE.CUSTOM_IMAGE,
        icon: faImage
      }
    ]
  }
];

export const WEBGL_COMPONENT_PROP_TYPES = {
  BASIC: 'basic',
  SHADOW: 'shadow',
  BACKGROUND: 'background',
  BORDER: 'border',
  TEXT: 'text',
  IMAGE: 'image'
};