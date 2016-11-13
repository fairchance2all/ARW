class CreateElementCWController{
    constructor(API, ToastService){
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;


    }

    $onInit(){

        this.deleteNote();

    }
    deleteNote(){
        this.title="";
        this.photo="";
        this.note="";

    }


    save(){
        var data = {
            title: this.title,
            note: this.note,
            photo: this.photo.base64
        };

        this.API.all('create-element').post(data).then((response) => {
            this.ToastService.show('Élément ajouté !');
    });
    }
}

export const CreateElementCWComponent = {
    templateUrl: './views/app/components/create-element-CW/create-element-CW.component.html',
    controller: CreateElementCWController,
    controllerAs: 'vm',
    bindings: {}
}
