import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardFooter,
  CardHeader
} from "reactstrap";

import './AlbumInfo.css'

class AlbumInfo extends Component {
  _getAlbumInfo(albumInfo) {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <p className="header-text">Album ID #{albumInfo.id}</p>
            <Button color="light" onClick={this.props.onHideClick} className="hide-button">
              hide
            </Button>
          </CardHeader>
          <img src={albumInfo.thumbnailUrl} />

          <CardBody>
            <CardTitle className="h4">{albumInfo.title}</CardTitle>
            <hr />
            <CardText className="blockquote album-text">
              {" "}
              Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
              euismod in, nibh. Quisque volutpat condimentum velit. Class aptent
              Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
              euismod in, nibh. Quisque volutpat condimentum velit. Class
            </CardText>

          </CardBody>

          <CardFooter>{albumInfo.url}</CardFooter>
        </Card>
      </React.Fragment>
    );
  }

  render() {
    const albumInfo = this.props.rowInfo;
    return <React.Fragment>{this._getAlbumInfo(albumInfo)}</React.Fragment>;
  }
}

export default AlbumInfo;
