import React from 'react'
import { Graph } from '@antv/x6'
import { SplitBox } from '@antv/x6-react-components'
import '@antv/x6-react-components/es/split-box/style/index.css'
import '../index.less'
import './index.less'

export default class Example extends React.Component {
  private graphContainer1: HTMLDivElement
  private graphContainer2: HTMLDivElement
  private graphContainer3: HTMLDivElement

  componentDidMount() {
    new Graph({
      container: this.graphContainer1,
      background: {
        color: '#F2F7FA',
      },
      autoResize: true,
    })

    new Graph({
      container: this.graphContainer2,
      background: {
        color: '#F2F7FA',
      },
      autoResize: true,
    })

    new Graph({
      container: this.graphContainer3,
      background: {
        color: '#F2F7FA',
      },
      autoResize: true,
    })
  }

  refContainer1 = (container: HTMLDivElement) => {
    this.graphContainer1 = container
  }

  refContainer2 = (container: HTMLDivElement) => {
    this.graphContainer2 = container
  }

  refContainer3 = (container: HTMLDivElement) => {
    this.graphContainer3 = container
  }

  render() {
    return (
      <div
        className="x6-graph-wrap"
        style={{ width: 800, height: 800, margin: '0 auto' }}
      >
        <SplitBox split="horizontal">
          <div className="full">
            <div ref={this.refContainer1} className="x6-graph" />
          </div>
          <SplitBox split="vertical">
            <div className="full">
              <div ref={this.refContainer2} className="x6-graph" />
            </div>
            <div className="full">
              <div ref={this.refContainer3} className="x6-graph" />
            </div>
          </SplitBox>
        </SplitBox>
      </div>
    )
  }
}
