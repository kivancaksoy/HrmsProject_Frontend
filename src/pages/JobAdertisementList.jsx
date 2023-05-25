import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Table } from "semantic-ui-react";

export default function JobAdertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAll()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Yayın Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Adedi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.jobPositionName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobPostingDate}</Table.Cell>
              <Table.Cell>{jobAdvertisement.numberOfJobOpenings}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
