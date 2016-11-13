class ListElementsCWController{
    constructor(API, ToastService){
        'ngInject';

        this.API = API;
        this.elements = [];
    }

    $onInit(){
        this.getElements();
    }

    getElements(){
        this.API.all('list-elements').get('')
            .then((response) => {
            this.elements = response.data;
    });
    }

    delete(id){
        var data = {
            id: id
        };

        this.API.all('delete-element').post(data).then((response) => {
            this.ToastService.show('Element delete successfully');
    });
        this.getElements();
    }
    
}

export const ListElementsCWComponent = {
    templateUrl: './views/app/components/list-elements-CW/list-elements-CW.component.html',
    controller: ListElementsCWController,
    controllerAs: 'vm',
    bindings: {}
}
