import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }
    componentDidMount() {
        //wait till the image is loaded
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    //make the image span grid according to the size
    setSpans = () => {
        const imageHeight = this.imageRef.current.clientHeight;
        const spans = Math.ceil(imageHeight / 10);
        this.setState({ spans: spans });
    }
    render() {
        const { urls, description } = this.props.img;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        )
    }
}

export default ImageCard;