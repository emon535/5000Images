import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default class Paginator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      totalPageNumber: this.getTotalPageNumber(this.props)
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(number) {
    if (number === 0 || number > this.state.totalPageNumber) return;

    let startIndex = this.props.numberOfItemPerPage * (number - 1);
    let endIndex =
      this.props.numberOfItemPerPage * number < this.props.listLength
        ? this.props.numberOfItemPerPage * number
        : this.props.listLength;

    this.setState({
      activePage: number
    });

    this.props.handleChangePage(startIndex, endIndex);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.listLength && nextProps.numberOfItemPerPage) {
      this.setState({
        totalPageNumber: this.getTotalPageNumber(nextProps)
      });
    }
  }

  getTotalPageNumber(props) {
    return Math.ceil(props.listLength / props.numberOfItemPerPage);
  }

  render() {
    let items = [];
    for (let number = 1; number <= this.state.totalPageNumber; number++) {
      items.push(
        <PaginationItem
          key={number}
          active={this.state.activePage === number}
          onClick={() => this.onChangePage(number)}
        >
          {number}
        </PaginationItem>
      );
    }

    return (
      <Pagination bsSize="medium" className="users-pagination pull-right">
        <PaginationItem>
          <PaginationLink
            first
            href={() => this.onChangePage(this.state.activePage - 1)}
            disabled={this.state.activePage === 1}
            onClick={() => this.onChangePage(this.state.activePage - 1)}
          />
        </PaginationItem>

        {items}
        <PaginationLink
          previous
          href="#"
          disabled={this.state.activePage === this.state.totalPageNumber}
          onClick={() => this.onChangePage(this.state.activePage + 1)}
        />
      </Pagination>
    );
  }
}
