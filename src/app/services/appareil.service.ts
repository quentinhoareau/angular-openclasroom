export class AppareilService {
  appareils = [
    {
      id : 1,
      name: 'Machine  à laver',
      status: 'allumé'
    },
    {
      id : 2,
      name: 'Télévision',
      status: 'allumé'
    },
    {
      id : 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  getAppareilById(id: number){

     const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(id: number){
    this.getAppareilById(id)!.status= 'allumé';
  }
  switchOffOne(id: number){
    this.getAppareilById(id)!.status= 'éteint';
  }



}
