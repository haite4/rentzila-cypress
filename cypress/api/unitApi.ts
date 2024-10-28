import { Endpoints } from "../constants/enumsEndpoints";
import { ApiHelper } from "./rentzilaApi";
import  RandomValue  from "../helper/randomValue";
import { MoneyCurrency } from "../constants/moneyCurrency";
import { TypeOfWork } from "../constants/typeOfWork";
import { TimeOfWork } from "../constants/timeOfWork";
import { PaymentMethods } from "../constants/paymentMethods";

class UnitApi extends ApiHelper {
  private randomValue: RandomValue;
  constructor() {
    super();
    this.randomValue = new RandomValue();
  }

  createUnit() {
    return super.createUserJwtToken().then((token) => {
      return cy
        .request({
          method: "POST",
          url: `${Cypress.env("BASE_URL")}${Endpoints.API_UNITS}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: {
            category: 146,
            name: this.randomValue.generateStringWithLength(10),
            manufacturer: 10,
            model_name: this.randomValue.generateStringWithLength(10),
            features: this.randomValue.generateStringWithLength(10),
            description: this.randomValue.generateStringWithLength(100),
            lat: 50.46013446353369,
            lng: 30.46777478959968,
            owner: 1777,
            minimal_price: 2222,
            money_value:
              this.randomValue.selectRandomValueFromArray(MoneyCurrency),
            type_of_work:
              this.randomValue.selectRandomValueFromArray(TypeOfWork),
            time_of_work:
              this.randomValue.selectRandomValueFromArray(TimeOfWork),
            payment_method:
              this.randomValue.selectRandomValueFromArray(PaymentMethods),
            services: [336],
          },
        })
        .then((response) => {
          return response.body;
        });
    });
  }

  deleteUnit(unitId: number) {
    return super.createUserJwtToken().then((token) => {
      return cy
        .request({
          method: "DELETE",
          url: `${Cypress.env("BASE_URL")}${Endpoints.API_UNITS}${unitId}/`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          return response.status;
        });
    });
  }
}


export default new UnitApi()