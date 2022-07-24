import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CreatelistComponent extends Component {
    @tracked isChecked = false;

    @action
    remove(task){
        if(task && this.args.onDelete){
            this.args.onDelete(task);
        }
    }

}