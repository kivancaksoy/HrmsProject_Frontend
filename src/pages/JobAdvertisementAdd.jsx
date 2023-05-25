import React, { useEffect, useState } from "react";
import { Button, FormGroup } from "semantic-ui-react";
import CityService from "../services/cityService";
import EmploymentTypeService from "../services/employmentTypeService";
import LocationTypeService from "../services/locationType";
import JobPositionService from "../services/jobPositionService";
import { Form, Formik } from "formik";
import * as yup from "yup";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import KodlamaIoTextSelect from "../utilities/customFormControls/KodlamaIoTextSelect";
import KodlamaIoTextArea from "../utilities/customFormControls/KodlamaIoTextArea";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { useNavigate } from "react-router-dom";

export default function JobAdvertisementAdd() {
  const [cities, setCities] = useState([]);
  const [employmentTypes, setEmploymentTypes] = useState([]);
  const [locationTypes, setLocationTypes] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  let cityService = new CityService();
  let employmentTypeService = new EmploymentTypeService();
  let locationTypeService = new LocationTypeService();
  let jobPositionService = new JobPositionService();
  let jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    cityService.getAll().then((result) => setCities(result.data.data));
    employmentTypeService
      .getAll()
      .then((result) => setEmploymentTypes(result.data.data));
    locationTypeService
      .getAll()
      .then((result) => setLocationTypes(result.data.data));
    jobPositionService
      .getAll()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  const cityOptions = cities.map((city) => ({
    key: city.id,
    text: city.cityName,
    value: city.id,
  }));

  const employmentTypeOptions = employmentTypes.map((employmentType) => ({
    key: employmentType.id,
    text: employmentType.employmentTypeName,
    value: employmentType.id,
  }));

  const locationTypeOptions = locationTypes.map((locationType) => ({
    key: locationType.id,
    text: locationType.locationTypeName,
    value: locationType.id,
  }));

  const jobPositionOptions = jobPositions.map((jobPosition) => ({
    key: jobPosition.id,
    text: jobPosition.jobPositionName,
    value: jobPosition.id,
  }));

  const initialValues = {
    maxSalary: 0,
    minSalary: 0,
    companyId: 3,
    numberOfJobOpenings: 0,
    applicationDeadline: new Date().toISOString().slice(0, 10),
  };
  const validationSchema = yup.object({
    //jobPositionId: yup.string().required("İş pozisyonu alanı zorunludur."),
  });

  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await jobAdvertisementService.add(values);
          navigate("/");
        }}
      >
        <Form className="ui form">
          <h1 style={{ margin: "25px" }}>
            <label>İş İlanı Oluştur</label>
          </h1>
          <FormGroup
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <KodlamaIoTextSelect
              name="jobPositionId"
              placeholder="İş pozisyonu"
              label="İş pozisyonu"
              options={jobPositionOptions}
            ></KodlamaIoTextSelect>
            <KodlamaIoTextSelect
              name="employmentTypeId"
              placeholder="Çalışma türü"
              label="Çalışma türü"
              options={employmentTypeOptions}
            ></KodlamaIoTextSelect>
            <KodlamaIoTextSelect
              name="locationTypeId"
              placeholder="Çalışma lokasyonu"
              label="Çalışma lokasyonu"
              options={locationTypeOptions}
            ></KodlamaIoTextSelect>
          </FormGroup>
          <FormGroup
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <KodlamaIoTextSelect
              name="cityId"
              placeholder="Şehir"
              label="Şehir"
              options={cityOptions}
            ></KodlamaIoTextSelect>
            <KodlamaIoTextInput
              name="minSalary"
              placeholder="Minimum maaş"
              type="number"
              label="Minimum maaş"
            ></KodlamaIoTextInput>
            <KodlamaIoTextInput
              name="maxSalary"
              placeholder="Maksimum maaş"
              type="number"
              label="Maksimum maaş"
            ></KodlamaIoTextInput>
          </FormGroup>
          <FormGroup
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <KodlamaIoTextInput
              name="numberOfJobOpenings"
              placeholder="Açık pozisyon adedi"
              type="number"
              label="Açık pozisyon adedi"
            ></KodlamaIoTextInput>
            <KodlamaIoTextInput
              name="applicationDeadline"
              placeholder="Son başvuru tarihi"
              type="date"
              label="Son başvuru tarihi"
            ></KodlamaIoTextInput>
          </FormGroup>
          <KodlamaIoTextArea
            name="description"
            label="Açıklama"
            placeholder="Açıklama"
          ></KodlamaIoTextArea>
          <Button color="green" type="submit">
            İlanı Yayınla
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
