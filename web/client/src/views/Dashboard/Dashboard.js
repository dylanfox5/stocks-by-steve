import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
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
import {
  dailySalesChartAmazon,
  dailySalesChartApple,
  dailySalesChartAlphbet,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const watson_script =
  "window.watsonAssistantChatOptions = {" +
  "integrationID: 'c947c3a0-7a64-4fe7-841f-817ee2d4b2b7'," +
  "region: 'eu-gb'," +
  "serviceInstanceID: '0b081cf6-7d42-45fb-937f-c507cc976130'," +
  "onLoad: function(instance) { instance.render(); }" +
  "};" +
  "setTimeout(function(){" +
  "const t=document.createElement('script');" +
  "t.src='https://web-chat.global.assistant.watson.appdomain.cloud/versions/' + (window.watsonAssistantChatOptions.clientVersion || 'latest') + '/WatsonAssistantChatEntry.js';" +
  "document.head.appendChild(t);" +
  "});";

export default function Dashboard() {
  // const search = window.location.search;
  // const params = new URLSearchParams(search);
  // const industry = params.get("industry");
  // const volatility = params.get("volatility");
  // const restriction = params.get("restriction");
  // const investment = params.get("investment");

  // const [data, setData] = React.useState(null);
  // fetching the GET route from the Express server which matches the GET route from server.js
  // const retrieveStockList = async () => {
  //   const stock_list_url ="/stock_list?industry="
  //     +industry+"&volatility="+volatility+"&restriction="+restriction;
  //   const stock_list_response = await fetch(stock_list_url);
  //   const body = await stock_list_response.json();

  //   if (stock_list_response.status !== 200) {
  //     throw Error(body.message);
  //   }

  //   return body;
  // };

  // fetching the GET route from the Express server which matches the GET route from server.js
  // const retrieveSentimentAnalysis = async () => {
  //   const sentiment_analysis_response = await fetch("/sentiment_analysis");
  //   const body = await sentiment_analysis_response.json();

  //   if (sentiment_analysis_response.status !== 200) {
  //     throw Error(body.message);
  //   }

  //   return body;
  // };

  // fetching the GET route from the Express server which matches the GET route from server.js
  // const retrieveTimeSeriesForcast = async () => {
  //   const time_series_forecast_response = await fetch("/time_series_forecast");
  //   const body = await time_series_forecast_response.json();

  //   if (time_series_forecast_response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };

  // React.useEffect(() => {
  //   retrieveStockList()
  //     .then((res) => {
  //       setData(res.express);
  //       console.log(res.express);
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));

  //   retrieveSentimentAnalysis()
  //     .then((res) => {
  //       setData(res.express);
  //       console.log(res.express);
  //     })
  //     .catch((err) => console.log(err));

  //   retrieveTimeSeriesForcast()
  //     .then((res) => {
  //       setData(res.express);
  //       console.log(res.express);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  React.useEffect(() => {
    var script = document.createElement("script");
    script.innerHTML = watson_script;
    document.body.appendChild(script);
  }, []);

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Alphabet</p>
              <h3 className={classes.cardTitle}>$GOOG</h3>
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
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Amazon</p>
              <h3 className={classes.cardTitle}>$AMZN</h3>
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
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Apple</p>
              <h3 className={classes.cardTitle}>$APPL</h3>
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
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChartAlphbet.data}
                type="Line"
                options={dailySalesChartAlphbet.options}
                listener={dailySalesChartAlphbet.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Alphabet $GOOG</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 0.25%
                </span>{" "}
                increase
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime />
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Just Updated
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChartAmazon.data}
                type="Line"
                options={dailySalesChartAmazon.options}
                listener={dailySalesChartAmazon.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Amazon $AMZN</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 0.98%
                </span>{" "}
                increase
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime />
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Just Updated
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChartApple.data}
                type="Line"
                options={dailySalesChartApple.options}
                listener={dailySalesChartApple.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>APPLE $APPL</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 0.35%
                </span>{" "}
                increase
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime />
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Just Updated
                </a>
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
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>$GOOG</h4>
              <p className={classes.cardCategoryWhite}>ALPHABET</p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Tweet", "Sentiment"]}
                tableData={[
                  [
                    "$GOOG Waiting for Short signal on GOOG  with https://t.co/sxj8WuVZJB https://t.co/xgXQJeSh7R",
                    "0.6249",
                  ],
                  [
                    "A $GOOG technologist referring to Bitcoin as most important innovation of our century!!  https://t.co/Ihe6VkjrVF",
                    "0.4588",
                  ],
                  [
                    "Tesla overtakes Mercedes Benz to claim 3rd spot in U.S. luxury vehicle registrations in 2021:… https://t.co/qa2BIzNwJo",
                    "-0.6597",
                  ],
                  [
                    "Insider John L Hennessy reports selling 201 shares of $GOOG for a total cost of $600,887.29 https://t.co/T8wmpqZ7od #FNTL",
                    "0.4939",
                  ],
                  [
                    "The width of the US is about 3k miles.  And 5 tests later $GOOG still hasn’t wantonly unleashed cars nationwide. https://t.co/WM4nMp2301",
                    "0.4019",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>$AMZN</h4>
              <p className={classes.cardCategoryWhite}>Amazon</p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="success"
                tableHead={["Tweet", "Sentiment"]}
                tableData={[
                  [
                    "@AprilW84190618 Yep! Rivian IPO and $AMZN on watch for tomorrow",
                    "0.4404",
                  ],
                  [
                    "RT @MarketRebels: Seen on WSB: $PYPL is the only company in history to tank after announcing a partnership with $AMZN",
                    "-0.4019",
                  ],
                  [
                    "RT @MommyTrades: $AMZN Encouraging Close.  Disclosure: Long since 3266. https://t.co/UYcn1uKDcz",
                    "0.5093",
                  ],
                  ["Tomorrow main focus. $coin $amzn $tsla. GL", "0.0258"],
                  [
                    "@MarketRebels @BahamaBen9 $AMZN is slowing down as well that is why it’s allowing all these parter-ships.",
                    "0.34",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>$APPL</h4>
              <p className={classes.cardCategoryWhite}>Apple</p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={["Tweet", "Sentiment"]}
                tableData={[
                  [
                    "@CryptoCalf @real_vijay Saylor has made clear that he believes #Bitcoin is the apex property.  All other assets on… https://t.co/J3uPN1QeQx",
                    "0.5106",
                  ],
                  [
                    "No big deal, no big deal seeing Apple CEO Tim Cook go long on crypto, welcome to the new world! $btc $appl https://t.co/JPBNqSZr4p",
                    "-0.1759",
                  ],
                  [
                    "@ShinobiSignals Yes! I’m holding out for $appl $cat $msft. I bought calls on the pullbacks, now let’s GO!",
                    "0.508",
                  ],
                  [
                    "So @tim_cook is #bitcoin curious. I wonder if @Apple $APPL has given it a ponder. https://t.co/fdLjUakZVe",
                    "0.3182",
                  ],
                  [
                    "$PTON has no moat or competitive advantage over established fitness band giants like $APPL and Fitbit",
                    "0.6249",
                  ],
                  [
                    "It's a matter of when not if! $APPL 🍎🍏🍎🍏🍎 https://t.co/9lkz1JzjDI",
                    "0.1007",
                  ],
                  [
                    "No rush people. Accumulation is name of the game.   20x $APPL 🙌 https://t.co/Nc1tNyu9RG",
                    "-0.296",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
