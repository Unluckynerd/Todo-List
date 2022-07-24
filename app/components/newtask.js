import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class newTaskComponent extends Component {
    @tracked task;
    
    @action
    addtask(event){
        event.preventDefault();
        if (this.task && this.args.onCreate) {
            this.args.onCreate(this.task);
            this.task = '';
        }
    }
}
