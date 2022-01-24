import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

import api from '../../services/api';
import Header from '../../components/Header';
import DataTable from '../../components/DataTable';
import Loading from '../../components/Loading';

import Container from './styles';

function Main() {
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
      <DataTable clients={dataClients} />
    </Container>
  );
}

export default Main;
