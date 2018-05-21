/**
 * code by spencerZ
 * 2018-03-28 宝贝模块
 */

import './style.scss'
import React, { Component } from 'react';

export default class Item extends Component {

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

  showItemModal = () => {
    this.props.editor.editItemBlock(this.props.block, this.props.mediaData);
  }

  render() {
    const { mediaData, editor } = this.props;
    const blockData = this.props.block.getData();

    if(!editor.props.disabled) {
      return (
        <div className="braft-editor-custom-block" onMouseEnter={this.showRemoveBtn} onMouseLeave={this.hideRemoveBtn}>
          <div className="braft-editor-search-item-wrap">
            <div className="braft-editor-search-item-cover">
              <div className="ice-img sharp">
                <img src={mediaData.coverUrl} />
              </div>
              <div className="braft-editor-search-item-trigger" onClick={this.showItemModal}>点击完善资料</div>
            </div>
            <span className="braft-editor-search-item-title">{mediaData.title}</span>
            <span className="braft-editor-search-item-price" >{mediaData.price}</span>
          </div>
          <span className="braft-editor-block-remove" style={{display: this.state.showRemove ? 'block' : 'none' }}>
            <a href="javascript:;" onClick={this.removeItemBlock}>×</a>
          </span>
        </div>
      );
    }else {
      return (
        <div className="braft-editor-custom-block">
          <div className="braft-editor-search-item-wrap">
            <div className="braft-editor-search-item-cover">
              <div className="ice-img sharp">
                <img src={mediaData.coverUrl} />
              </div>
            </div>
            <span className="braft-editor-search-item-title">{mediaData.title}</span>
            <span className="braft-editor-search-item-price" >{mediaData.price}</span>
            <span className="braft-editor-search-item-price" >{mediaData.resourceUrl}</span>
          </div>
        </div>
      );
    }
  }
}