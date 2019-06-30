import React, { Component } from "react";
import { Container, Jumbotron, Button, Card, CardBody, CardText, CardTitle, CardFooter, CardHeader } from "reactstrap";
import "./AlbumInfo.css";

class AlbumInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideme: false
    };

    this._getAlbumInfo = this._getAlbumInfo.bind(this);
  }

  _getAlbumInfo(albumInfo) {
    console.log(albumInfo, " from albumInfoComponent")
    return (
      <React.Fragment>
        <Card>
          <CardHeader>Album ID #{albumInfo.id}</CardHeader>
          <img src={albumInfo.thumbnailUrl} />
          <CardBody>
            <CardTitle>{albumInfo.title}</CardTitle>
            <CardText>  Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
            euismod in, nibh. Quisque volutpat condimentum velit. Class aptent Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
            euismod in, nibh. Quisque volutpat condimentum velit. Class</CardText>
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