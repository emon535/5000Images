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

class AlbumInfo extends Component {
  _getAlbumInfo(albumInfo) {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <h4>Album ID #{albumInfo.id}</h4>
          </CardHeader>
          <img src={albumInfo.thumbnailUrl} />
          <CardBody>
            <CardTitle className="h4">{albumInfo.title}</CardTitle>
            <hr />
            <CardText className="blockquote">
              {" "}
              Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
              euismod in, nibh. Quisque volutpat condimentum velit. Class aptent
              Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
              euismod in, nibh. Quisque volutpat condimentum velit. Class
            </CardText>
            <Button color="dark" onClick={this.props.onHideClick}>
              hide
            </Button>
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
