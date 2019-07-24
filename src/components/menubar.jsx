import React, { Component } from "react";

class MenuBar extends Component {
  constructor() {
    super();
    this.onClickForward = this.onClickForward.bind(this);
    this.onClickBackward = this.onClickBackward.bind(this);

    const img2 = "images/image2.jpg";
    const img3 = "images/image3.jpg";
    const img4 = "images/image4.jpg";
    const img5 = "images/image5.jpg";
    const img6 = "images/image6.jpg";
    const img7 = "images/image7.jpg";
    const img8 = "images/image8.jpg";
    const img9 = "images/image9.jpg";

    this.state = {
      index: 0,
      imgList: [img2, img3, img4, img5, img6, img7, img8, img9]
    };
  }

  onClickForward() {
    if (this.state.index + 1 === this.state.imgList.length) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({
        index: this.state.index + 1
      });
    }
  }

  onClickBackward() {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.imgList.length - 1
      });
    } else {
      this.setState({
        index: this.state.index - 1
      });
    }
  }

  render() {
    return (
      <div>
        <button class="btn btn-primary" onClick={this.onClickBackward}>
          Previous
        </button>
        <button class="btn btn-success" onClick={this.onClickForward}>
          Forward
        </button>
        <img
          src={this.state.imgList[this.state.index]}
          height="600px"
          width="2000px"
          alt="image of Greater Chicago"
          {...this.state.index}
        />
      </div>
    );
  }
}

export default MenuBar;
