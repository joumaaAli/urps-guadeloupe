import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { fetchPendingParticiens, fetchPraticiens } from "@/services/praticien";
import { Praticien as PraticienType } from "@/types/models";
import { Button, Col, Row } from "react-bootstrap";
import { Input } from "reactstrap";

const Application = () => {
  const [praticiens, setPraticiens] = useState<PraticienType[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPendingParticiens().then((data) => {
      setPraticiens(data.data);
    });
  }, []);

  useEffect(() => {
    fetchPraticiens(search).then((data) => {
      setPraticiens(data.data);
    });
  }, [search]);

  const columns = [
    {
      name: "Nom",
      selector: (row: PraticienType) => row.firstName || "",
      sortable: true,
    },
    {
      name: "Prénom",
      selector: (row: PraticienType) => row.lastName || "",
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: PraticienType) => row.email || "",
      sortable: true,
    },
    {
      name: "City",
      selector: (row: PraticienType) => row.city?.name || "",
      sortable: true,
    },
    {
      name: "Specialties",
      selector: (row: PraticienType) =>
        row?.specialties?.map((s) => s.name).join(", ") || "",
      sortable: true,
    },
    {
      name: "Matériels",
      selector: (row: PraticienType) =>
        row?.materiels?.map((m) => m.name).join(", ") || "",
      sortable: true,
    },
    {
      name: "Actions",
      button: true,
      minWidth: "200px",
      cell: (row: PraticienType) => (
        <Row className="w-100">
          <Col md="6">
            <Button onClick={() => console.log("Accepted", row.orderNumber)}>
              Accept
            </Button>
          </Col>
          <Col md="6">
            <Button
              onClick={() => console.log("Rejected", row.orderNumber)}
              variant="danger"
            >
              Reject
            </Button>
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <div className="d-flex w-100 align-items-center flex-column">
      <h1 className="text-align-center">Application</h1>
      <Input
        type="text"
        placeholder="Search using First Name, Last Name or Email."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-50 my-2"
      />
      <DataTable
        columns={columns}
        data={praticiens}
        highlightOnHover
        pointerOnHover
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
      />
    </div>
  );
};

export default Application;
