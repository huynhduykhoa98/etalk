/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable no-console */
/* eslint-disable quotes */
import React from 'react';
// import { FormattedMessage } from 'react-intl';
import axios from 'axios';

class About extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`https://baitap-mongo.herokuapp.com/Api/KhachHang/GetAll`)
      .then((res) => {
        const persons = res.data.data;
        console.log(persons);
        this.setState({ persons });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((value) => (
          <li>
            {value.TenKh}
            <br />
            {value.DiaChi}
            <br />
            {value.DienThoai}
            <br />
            {value.MaKH}
          </li>
        ))}
      </ul>
    );
  }
}

export default About;
