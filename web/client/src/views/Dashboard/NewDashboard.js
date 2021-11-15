import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// import { bugs, website, server } from "variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "variables/charts.js";
import { dailySalesChart } from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const industry = params.get("industry");
  const volatility = params.get("volatility");
  const restriction = params.get("restriction");
  // const investment = params.get("investment");

  const [sentimentAnalyisTables, setSentimentAnalyisTables] = React.useState({});
  const [timeSeriesForcastGraphs, setTimeSeriesForcastGraphs] = React.useState({});
  // fetching the GET route from the Express server which matches the GET route from server.js
  const retrieveStockList = async () => {
    const stock_list_url =
      "/stock_list?industry=" +
      industry +
      "&volatility=" +
      volatility +
      "&restriction=" +
      restriction;
    const stock_list_response = await fetch(stock_list_url);
    const body = await stock_list_response.json();

    if (stock_list_response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  };

  // fetching the GET route from the Express server which matches the GET route from server.js
  const retrieveSentimentAnalysis = async () => {
    const sentiment_analysis_url =
      "/sentiment_analysis?industry=" +
      industry +
      "&volatility=" +
      volatility +
      "&restriction=" +
      restriction;
    const sentiment_analysis_response = await fetch(sentiment_analysis_url);
    const body = await sentiment_analysis_response.json();

    if (sentiment_analysis_response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  };

  // fetching the GET route from the Express server which matches the GET route from server.js
  const retrieveTimeSeriesForcast = async () => {
    const time_series_forecast_url =
      "/time_series_forecast?industry=" +
      industry +
      "&volatility=" +
      volatility +
      "&restriction=" +
      restriction;
    const time_series_forecast_response = await fetch(time_series_forecast_url);
    const body = await time_series_forecast_response.json();

    if (time_series_forecast_response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  React.useEffect(() => {
    retrieveSentimentAnalysis()
      .then((res) => {
        createTwitterSentimentAnalysisTables(res);
      })
      .catch((err) => console.log(err));

    retrieveTimeSeriesForcast()
      .then((res) => {
        createTimeSeriesForcastGraphs(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function createTwitterSentimentAnalysisTables(result) {
    sentiment_analysis_tabels = {};

    // Before creating the table we need to pre-process the data

    result.forEach((sentiment_result) => {
      let stock_code = sentiment_result.Stock_Code;
      let tweet_sentiment = sentiment_result.tweet_sentiment;

      sentiment_table =
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>
                {stock_code}
              </h4>
              <p className={classes.cardCategoryWhite}>{stock_code}</p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={["Tweet", "Sentiment"]}
                tableData={tweet_sentiment} // array of arrays check head
              />
            </CardBody>
          </Card>
        </GridItem>;
    
      sentiment_analysis_tabels.push(sentiment_table);
    });

    setSentimentAnalyisTables(sentiment_analysis_tabels);
  }

  function createTimeSeriesForcastGraphs(result) {

  }

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Facebook</p>
              <h3 className={classes.cardTitle}>$FB</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Just Updated
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Amazon</p>
              <h3 className={classes.cardTitle}>$AMZN</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Apple</p>
              <h3 className={classes.cardTitle}>$APPL</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Cloudfare</p>
              <h3 className={classes.cardTitle}>$NET</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Amazon $AMZN</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Amazon $AMZN</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Amazon $AMZN</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem> */}
      </GridContainer>
      <GridContainer>
        {sentimentAnalyisTables}
      </GridContainer>
    </div>
  );
}
