import { buildProps, isBoolean, isNumber, isString } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes } from 'vue';
import type Radio from './radio.vue';

export const radioPropsBase = buildProps({
  /**
   * @zh 单选框尺寸
   * @en size of the Radio
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh 是否禁用单选框
   * @en whether Radio is disabled
   */
  disabled: Boolean,

  /**
   * @zh 单选框的值
   * @en the value of Radio
   * @defaultValue ''
   */
  label: {
    type: [String, Number, Boolean],
    default: ''
  }
});

export const radioProps = buildProps({
  ...radioPropsBase,

  /**
   * @zh 绑定值
   * @en binding value
   * @defaultValue ''
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },

  /**
   * @zh 单选框原生name属性
   * @en native `name` attribute
   * @defaultValue ''
   */
  name: {
    type: String,
    default: ''
  },

  /**
   * @zh 是否为单选框添加边框
   * @en whether to add a border around Radio
   */
  border: Boolean
});

export const radioEmits = {
  ['change']: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
  ['update:modelValue']: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val)
};

export type RadioProps = ExtractPropTypes<typeof radioProps>;
export type RadioInstance = InstanceType<typeof Radio>;
export type RadioEmits = typeof radioEmits;
