import { IndividualCustomer, EnterpriseCustomer } from "./customer";

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
}

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterAll(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lasName and cpf', () => {
    const sut = createIndividualCustomer('Bruno', 'Henrique', '111.111');
    expect(sut).toHaveProperty('firstName', 'Bruno');
    expect(sut).toHaveProperty('lastName', 'Henrique');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Bruno', 'Henrique', '111.111');
    expect(sut.getName()).toBe('Bruno Henrique');
    expect(sut.getIDN()).toBe('111.111');
  })
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('222');
  })
});
