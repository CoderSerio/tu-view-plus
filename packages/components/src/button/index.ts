import { withInstall } from '@tu-view-plus/utils';
import Button from './src/button.vue';
import ButtonGroup from './src/button-group.vue';

export const TuButton = withInstall(Button);
export const TuButtonGroup = withInstall(ButtonGroup);

export default TuButton;

export * from './src/button';
export * from './src/constants';
