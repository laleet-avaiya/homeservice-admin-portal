/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function UserProfile(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={20} sm={20} md={10}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="First Name"
                    id="first_name"
					value="Laleet"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
				<GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Last Name"
                    id="last_name"
					value="Avaiya"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
				<GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email Address"
                    id="email"
					value="201812087@daiict.ac.in"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
			  <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Address</InputLabel>
                  <CustomInput
                    id="address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 3
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
					value="Ahmedabad"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
					value="India"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
					value="382340"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
		<GridItem xs={20} sm={20} md={10}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Change ur Password</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>			
				<GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Old Password"
                    id="old-password"
					type="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
				<GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="New Password"
                    id="new-password"
					type="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
				<GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Confirm New Password"
                    id="c-new-password"
					type="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Change Password</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

UserProfile.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(UserProfile);