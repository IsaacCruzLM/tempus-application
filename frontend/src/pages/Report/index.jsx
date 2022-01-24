import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../../services/api';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import ClientReports from '../../components/ClientsReports';

import Container from './styles';

function Report() {
  const [loading, setLoading] = useState(true);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [dataClients, setDataClients] = useState([]);

  useEffect(async () => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem('authorization'));
    const clients = await api.getAllClientsByUser(token);

    if (!clients.message) {
      setDataClients(clients);
      setRedirectToLogin(false);
      setLoading(false);
    } else {
      alert(clients.message);
      setRedirectToLogin(true);
    }
  }, []);

  if (redirectToLogin) return <Redirect to="/" />;

  if (loading) return <Loading />;

  return (
    <Container>
      <Header />
      <ClientReports clients={dataClients} />
    </Container>
  );
}

export default Report;
