import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TasksComponent extends Component {
    @tracked listArray = ['Hello'];

    @action
    add(task) {
        console.log(this.listArray)
        this.listArray = [...this.listArray , task]
        console.log(this.listArray)
    }
  
    @action
    delete(task) {
      console.log('coming to delete');
      this.listArray.splice(this.listArray.indexOf(task), 1);
      this.listArray = this.listArray;
      console.log(this.listArray)
    }

}
