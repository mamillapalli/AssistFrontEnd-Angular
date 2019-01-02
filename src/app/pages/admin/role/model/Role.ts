export class Role {
    
    private id: number;
    private name: String;
    private description: String;
    private active: boolean;
    
    constructor( id: number,  name: String,  description: String, active: boolean) {
          this.id =id;
          this.name = name;
          this.description = description;
          this.active = active;
      }
  }