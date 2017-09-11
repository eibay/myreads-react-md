import React, { Component } from 'react'
import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import CardText from 'react-md/lib/Cards/CardText'

export default class Search extends Component {
  render() {
    return (
      <div className="md-grid">
        <h2 className="md-cell md-cell--12 md-text-container">
          Search
        </h2>
        <Card className="md-cell">
          <CardTitle title="Card 1" />
          <CardText>
            <p>Wowza</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <CardTitle title="Card 2" />
          <CardText>
            <p>Wowza</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <CardTitle title="Card 3" />
          <CardText>
            <p>Wowza</p>
          </CardText>
        </Card>
      </div>
    )
  }
}
