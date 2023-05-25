import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import CompanyService from "../services/companyService";

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    let companyService = new CompanyService();
    companyService
      .getAll()
      .then((result) => setCompanies(result.data.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Email Adresi</Table.HeaderCell>
            <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
            <Table.HeaderCell>Telefon numarası</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {companies.map((company) => (
            <Table.Row key={company.id}>
              <Table.Cell>{company.companyName}</Table.Cell>
              <Table.Cell>{company.email}</Table.Cell>
              <Table.Cell>{company.webSite}</Table.Cell>
              <Table.Cell>{company.phoneNumber}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
