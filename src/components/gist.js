import React, { PureComponent } from 'react'
import TagInput from '../containers/tagInput'
import TagList from '../containers/tagList'
//import GistEmbed from 'react-gist-embed'

function adjustHeightWhenComplete(myFrame, myDoc) {
  if(myDoc.readyState === 'complete') {
    var content_height = myFrame.contentWindow.document.documentElement.scrollHeight;
    myFrame.style.height = content_height + 'px';
  } else {
    // This will be continiously called until the iFrame is ready
    setTimeout(function(){adjustHeightWhenComplete(myFrame, myDoc)});
  }
}

class GistItem extends PureComponent  {

constructor(props){
    super(props)

    //this.adjustHeightWhenComplete = this.adjustHeightWhenComplete.bind(this);

}




    componentDidMount() {

        // Create an iframe, append it to this document where specified
        var gistFrame = document.createElement("iframe");
        gistFrame.setAttribute("width", "100%");
        gistFrame.id = "gistFrame" + this.props.item.id;

        var zone = document.getElementById("gistZone" + this.props.item.id);
        zone.innerHTML = "";
        zone.appendChild(gistFrame);

        // Create the iframe's document

        var url = "https://gist.github.com/" + this.props.item.id + ".js";
        var gistFrameHTML = '<html><body><script type="text/javascript" src=' + url + '></script></body></html>';

        // Set iframe's document with a trigger for this document to adjust the height
        var gistFrameDoc = gistFrame.document;

        if (gistFrame.contentDocument) {
          gistFrameDoc = gistFrame.contentDocument;
        } else if (gistFrame.contentWindow) {
          gistFrameDoc = gistFrame.contentWindow.document;
        }

        gistFrameDoc.open();
        gistFrameDoc.writeln(gistFrameHTML);
        gistFrameDoc.close();

        adjustHeightWhenComplete(gistFrame, gistFrameDoc);
      }

render() {
    const { item } = this.props
        if (!item) {
            return <p>Not found</p>
        } else {
            return (
                <div>Gist: {item.description}
                    {item.tag && <TagList tag={item.tag} id={item.id}/>}
                    <TagInput id={item.id} />


                     <div id={'gistZone' + item.id}></div>
                </div>
            )
        }
    }
}

export default GistItem
