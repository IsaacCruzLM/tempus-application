import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import ReportCard from '../ReportCard';

import {
  ButtonsContainer,
  Button,
  SelectedLine,
} from './styles';

function ClientReports({ clients }) {
  const [yearIsActive, setYearIsActive] = useState(true);
  const [monthIsActive, setMonthIsActive] = useState(false);
  const [todayIsActive, setTodayIsActive] = useState(false);
  const [filteredClients, setFilteredClients] = useState([]);

  const today = new Date();
  const currentDay = today.getDay();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const filterByMonth = () => {
    const arrayOfFilteredClients = clients.filter(({ dataDeCadastro }) => {
      const clientDate = new Date(dataDeCadastro);
      const clientMonth = clientDate.getMonth();
      const clientYear = clientDate.getFullYear();
      return (clientMonth === currentMonth && clientYear === currentYear);
    });
    setFilteredClients(arrayOfFilteredClients);
  };

  const filterByToday = () => {
    const arrayOfFilteredClients = clients.filter(({ dataDeCadastro }) => {
      const clientDate = new Date(dataDeCadastro);
      const clientDay = clientDate.getDay();
      const clientMonth = clientDate.getMonth();
      const clientYear = clientDate.getFullYear();
      return (
        clientDay === currentDay
        && clientMonth === currentMonth
        && clientYear === currentYear
      );
    });
    setFilteredClients(arrayOfFilteredClients);
  };

  const filterByYear = () => {
    const arrayOfFilteredClients = clients.filter(({ dataDeCadastro }) => {
      const clientDate = new Date(dataDeCadastro);
      const clientYear = clientDate.getFullYear();
      return (clientYear === currentYear);
    });
    setFilteredClients(arrayOfFilteredClients);
  };

  useEffect(() => {
    $('.monthButton').click(() => {
      filterByMonth();
      setYearIsActive(false);
      setTodayIsActive(false);
      setMonthIsActive(true);
    });

    $('.yearButton').click(() => {
      filterByYear();
      setMonthIsActive(false);
      setTodayIsActive(false);
      setYearIsActive(true);
    });

    $('.todayButton').click(() => {
      filterByToday();
      setYearIsActive(false);
      setMonthIsActive(false);
      setTodayIsActive(true);
    });

    filterByYear();
  }, []);

  return (
    <div style={{ maxWidth: '100%', padding: '0.8rem' }}>
      <ButtonsContainer>
        <Button active={yearIsActive} className="yearButton">
          <div>
            <span>Ano</span>
          </div>
          { yearIsActive && <SelectedLine /> }
        </Button>
        <Button active={monthIsActive} className="monthButton">
          <div>
            <span>Mês</span>
          </div>
          { monthIsActive && <SelectedLine /> }
        </Button>
        <Button active={todayIsActive} className="todayButton">
          <div>
            <span>Hoje</span>
          </div>
          { todayIsActive && <SelectedLine /> }
        </Button>
      </ButtonsContainer>
      <ReportCard clients={filteredClients} />
    </div>
  );
}

ClientReports.propTypes = {
  clients: PropTypes.arrayOf(Object).isRequired,
};

export default ClientReports;
