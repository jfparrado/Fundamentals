//declaracion del objeto con propiedades y funciones
let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: () => {
    return this.baseSalary + this.overtime * this.rate;
  },
};
//llamado de la funcion dentro del objeto
employee.getWage();
