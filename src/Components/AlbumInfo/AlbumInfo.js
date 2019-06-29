import React, { Component } from "react";
import { Container, Jumbotron, Button } from "reactstrap";
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
    return (
      <Container className="album-info-wrapper">
        <Jumbotron className="album-jum">
          <p className="hide-button">
            <Button color="primary" onClick={this.props.onHideClick}>
              hide
            </Button>
          </p>
          <h1 className="display-1">#{albumInfo.id}</h1>
          <img src={albumInfo.thumbnailUrl} />
          <h3 className="display-4">{albumInfo.title}</h3>
          <p className="lead">
            Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
            euismod in, nibh. Quisque volutpat condimentum velit. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis,
            tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla
            facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a
            tellus consequat imperdiet. Vestibulum sapien.
          </p>
          <hr className="my-2" />
          {albumInfo.url}
        </Jumbotron>
      </Container>
    );
  }

  render() {
    const albumInfo = this.props.rowInfo;
    console.log(this.props);
    return <React.Fragment>{this._getAlbumInfo(albumInfo)}</React.Fragment>;
  }
}

export default AlbumInfo;
