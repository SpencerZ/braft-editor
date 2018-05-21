/**
 * code by spencerZ
 * 2018-03-28 热点图模块
 */

import './style.scss'
import React, { Component } from 'react';

export default class HotSpotImage extends Component {

  state = {
    showRemove: false
  };

  showRemoveBtn = () => {
    this.setState({ showRemove: true });
  }
  hideRemoveBtn = () => {
    this.setState({ showRemove: false });
  }

  removeItemBlock = () => {
    this.props.editor.removeBlock(this.props.block)
  }

  showEditModal = () => {
    this.props.editor.editHotSpopImageBlock(this.props.block, this.props.mediaData);
  }

  render() {
    const { mediaData, editor } = this.props;
    const blockData = this.props.block.getData();
    let height = mediaData.picHeight*200 / mediaData.picWidth;
    let width = 200;
    let { hotSpaces } = mediaData;
    hotSpaces = hotSpaces.map((hotspot, index) => {
      const x = width * hotspot.x/100;
      const y = height * hotspot.y/100;
      const spotWidth = width * hotspot.width/100;
      const spotHeight = height * hotspot.height/100;
      return (
        <div key={index} className="braft-editor-hotspot-area-wrap" style={{top: y, left: x, width: spotWidth, height: spotHeight}}></div>
      );
    });

    return (
      <div className="braft-editor-custom-block" onMouseEnter={this.showRemoveBtn} onMouseLeave={this.hideRemoveBtn}>
        <div className="braft-editor-hotspot-image-wrap" style={{width: 200, height: height}}>
          <div className="braft-editor-hotspot-image-cover" style={{width: 200, height: height}}>
            <div className="ice-img sharp" style={{width: 200, height: height}}>
              <img src={mediaData.url} style={{width: 200, height: height}} />
            </div>
            <div className="braft-editor-hotspot-image-trigger" onClick={this.showEditModal}>编辑</div>
          </div>
          <div className="braft-editor-hotspot-list" style={{width: 200, height: height}}>
            <div className="braft-ediotr-hotspot-area" style={{width: 200, height: height}}>
              {hotSpaces}
            </div>
          </div>
        </div>
        <span className="braft-editor-block-remove" style={{display: this.state.showRemove ? 'block' : 'none' }}>
          <a href="javascript:;" onClick={this.removeItemBlock}>×</a>
        </span>
      </div>
    );
  }
}