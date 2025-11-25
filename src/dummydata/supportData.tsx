import { customColor } from "@/utils/theme/customColor";
import {
  Article,
  Balance,
  CheckCircle,
  ContentCopy,
  Cookie,
  Copyright,
  DataUsage,
  Edit,
  Forum,
  Gavel,
  Schedule,
  Security,
  Share,
  Shield,
  Update,
  Warning,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const tableData = [
  {
    purpose: "Enquiring about our organization and its work",
    data: "Name, email, message, phone number",
    basis:
      "Legitimate interests - it is necessary for us to read and store your message so that we can respond in the way that you would expect",
  },
  {
    purpose: "Subscribing to email updates about our work",
    data: "Name, email, phone number",
    basis: "Consent - you have given your active consent.",
  },
  {
    purpose: "Request for services",
    data: "Name, email, message, phone number",
    basis: "To further contact you.",
  },
  {
    purpose: "Website functionality",
    data: "Website activity collected through cookies",
    basis:
      "Legitimate interests - it is necessary for us to store a small amount of information, usually through cookies, to deliver functionality that you would expect, such as remembering the contents you have shared earlier.",
  },
  {
    purpose: "Visitors/users",
    data: "Identity, IP addresses, time spent on website, browser and device of the user.",
    basis: "Legitimate interests- to provide better user experience.",
  },
];

export const sectionData = [
  {
    id: 1,
    title: "Collection of personally identifiable information",
    icon: <Security sx={{ color: customColor.primary }} />,
    content: (
      <>
        <Typography variant="body1" textAlign={"justify"}>
          For the purposes of this Policy, 'Personal Information' is any data
          which relates to an individual who may be identified from that data,
          or from a combination of a set of data, and other information which is
          in possession of MsC. The following table explains the types of data
          we collect and the legal basis, under current data protection
          legislation, on which this data is processed.
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 3, mb: 2 }} elevation={0}>
          <Table sx={{ minWidth: 650 }} aria-label="data collection table">
            <TableHead>
              <TableRow sx={{ backgroundColor: customColor.primary }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Purpose
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Data (key elements)
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Basis
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:nth-of-type(odd)": {
                      backgroundColor: customColor.light,
                    },
                    "&:hover": { backgroundColor: customColor.light },
                  }}
                >
                  <TableCell>{row.purpose}</TableCell>
                  <TableCell>{row.data}</TableCell>
                  <TableCell>{row.basis}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    ),
  },
  {
    id: 2,
    title: "How we use your data",
    icon: <DataUsage sx={{ color: customColor.primary }} />,
    content: (
      <>
        <Typography variant="body1" paragraph>
          We will only use your data in a manner that is appropriate considering
          the basis on which that data was collected, as set out in the table at
          the top of this policy.
        </Typography>
        <Typography variant="body1" paragraph>
          For example, we may use your personal information to:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="a). Reply to enquiries you send to us;"
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="b). Where you have specifically agreed to this, send you marketing communications by email relating to our work which we think may be of interest to you."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="c). To provide better user experience to visitors/users."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
        </List>
      </>
    ),
  },
  {
    id: 3,
    title: "When we share your data",
    icon: <Share sx={{ color: customColor.primary }} />,
    content: (
      <>
        <Typography variant="body1" paragraph>
          We will only pass your data to third parties in the following
          circumstances:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="a). You have provided your explicit consent for us to pass data to a third party;"
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="b). We are using a third party purely for the purposes of processing data on our behalf and we have in place a data processing agreement with that third party that fulfills our legal obligations in relation to the use of third-party data processors; or"
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="c). We are required by law to share your data."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
        </List>
      </>
    ),
  },
  {
    id: 4,
    title: "How long we keep your data",
    icon: <Schedule sx={{ color: customColor.primary }} />,
    content: (
      <Typography variant="body1" paragraph>
        We take the principles of data minimization and removal seriously and
        have internal policies in place to ensure that we only ever ask for the
        minimum amount of data for the associated purpose and delete that data
        promptly once it is no longer required.
      </Typography>
    ),
  },
  {
    id: 5,
    title: "Rights you have over your data",
    icon: <Gavel sx={{ color: customColor.primary }} />,
    content: (
      <>
        <Typography variant="body1" paragraph>
          You have a range of rights over your data, which include the
          following:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="a). Where data processing is based on consent, you may revoke this consent at any time and we will make it as easy as possible for you to do this (for example by putting 'unsubscribe' links at the bottom of all our marketing emails)."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="b). You have the right to ask for rectification and/or deletion of your information."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="c). You have the right of access to your information."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="d). These rights may be limited in some situations – for example, where we can demonstrate that we have a legal requirement to process your Personal Information."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="e). You can assert your rights in the corresponding sections where such information was provided or by contacting us at iot@mscorpres.in."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
        </List>
      </>
    ),
  },
  {
    id: 6,
    title: "Use of Cookies",
    icon: <Cookie sx={{ color: customColor.primary }} />,
    content: (
      <Typography variant="body1" paragraph>
        A "cookie" is a small piece of information stored by a Web server on a
        Web browser so that it can be later read from that browser. Cookies are
        useful for enabling the browser to remember information specific to a
        given user. This is done to recognize your device during your future
        visits to our Website, primarily in order to provide better user
        experience.
      </Typography>
    ),
  },
  {
    id: 7,
    title: "Consequences of not providing Personal Information",
    icon: <Warning sx={{ color: customColor.primary }} />,
    content: (
      <Typography variant="body1" paragraph>
        If you choose not to provide your Personal Information that is mandatory
        to process your request, we may not be able to provide the corresponding
        experience.
      </Typography>
    ),
  },
  {
    id: 8,
    title: "Updates to this privacy statement",
    icon: <Update sx={{ color: customColor.primary }} />,
    content: (
      <Typography variant="body1" paragraph>
        MsC may change the data privacy practices and update this privacy
        statement as and when the need arises, and the same will be made
        available on the website. But our commitment to protect the privacy of
        website users will continue to remain.
      </Typography>
    ),
  },
];

export const sectionTermData = [
  {
    id: 1,
    title: "Website Content",
    icon: <Article sx={{ color: customColor.primary }}/>,
    content: (
      <Typography
        variant="body1"
        paragraph
        sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8 }}
      >
        All materials, including reports, newsletters, photographs,
        illustrations, images, artwork, designs, text, graphics, logos, button
        icons, images, audio and video clips, blogs etc. (collectively,
        "Content") appearing on or accessible through this Website are owned and
        controlled by the MsC and/or its affiliates and are protected by the
        intellectual property laws.
      </Typography>
    ),
  },
  {
    id: 2,
    title: "Use of content",
    icon: <ContentCopy sx={{ color: customColor.primary }}/>,
    content: (
      <Typography
        variant="body1"
        paragraph
        sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8 }}
      >
        Subject to the terms and conditions set forth in this Terms and any
        other policy as may be referred here you have been granted a
        non-exclusive, non-transferable, limited right to access and use this
        Website. You agree not to interrupt or attempt to interrupt the
        operation of the Website in any manner. You shall not modify, copy,
        distribute, transmit, display, perform, reproduce, publish, license,
        create derivative works from, transfer, or sell any information,
        software, products or services obtained from this Website.
      </Typography>
    ),
  },
  {
    id: 3,
    title: "Accuracy of content",
    icon: <CheckCircle sx={{ color: customColor.primary }}/>,
    content: (
      <Typography
        variant="body1"
        paragraph
        sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8 }}
      >
        Notwithstanding best endeavors, this Website may contain mistakes or
        typographical blunders. MsC makes no representations about the accuracy,
        reliability, completeness, or timelines of the Website or the Content.
        The utilization of the Website and Content is at your hazard. Changes
        are periodically made to the Website and may be made at any time. If you
        rely on any representation of information contained on this Website,
        then it shall be at your own risk.
      </Typography>
    ),
  },
  {
    id: 4,
    title: "Blogs and other social media channels",
    icon: <Forum sx={{ color: customColor.primary }}/>,
    content: (
      <>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8 }}
        >
          MsC employees, volunteers and associates may contribute their articles
          and opinion as a blog on this website entirely at the sole discretion
          of MsC. You hereby acknowledge and agree that these blogs constitute
          the opinion of the Individuals in their personal capacity and may not
          represent official opinion of MsC in any manner.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8 }}
        >
          You may be permitted to post comments and feedback to these blogs. By
          doing so, you expressly agree and acknowledge to abide by the
          following with respect to the blog and Website both:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="a) You shall not defame, abuse, harass, stalk threaten or otherwise violate the legal rights of MsC or any third party."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="b) You shall not contribute any content or take any action that may in any manner adversely affect the reputation of MsC, or that is otherwise detrimental to MsC. You shall not upload or otherwise make available, files that contain images, photographs, software or other material protected by intellectual property laws, including, by way of example, and not as limitation, copyright or trademark laws (or by rights of privacy or publicity) unless You own or control the rights thereto or have received all necessary consent to do the same."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="c) You shall not in any manner publish or post any inappropriate, defamatory, infringing, obscene, racist, terrorist, politically slanted, indecent or unlawful topic, name, material or information. You shall not use objectionable language or abbreviations."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="d) You shall not in any manner reveal confidential or proprietary information of any third party. Specifically, you shall not post any material for which you do not have requisite and applicable right(s) under law."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="e) You shall not upload files that contain viruses, trojan horses, worms, time bombs, cancelbots, corrupted files, or any other similar software or programs that may damage the operation of another's computer or property of another."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="f) You shall not advertise or offer to sell or buy any goods or services for any business purpose."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="g) You shall not download any file posted that You know, or should know, cannot be legally reproduced, displayed, performed, and/or distributed in such manner."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="h) You shall not falsify or delete any copyright management information, such as author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="i) You shall not create a false identity for the purpose of misleading others."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="j) You acknowledge that MsC may, at its sole discretion, monitor, remove or edit any content that You contribute. MsC may also pursue remedies available to it under law for any violation of these terms and conditions."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="k) You shall indemnify and hold harmless MsC from any claims and loss incurred by MsC as a result of your violation of these Terms of Use."
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
        </List>
      </>
    ),
  },
  {
    id: 5,
    title: "Ownership of Intellectual Property Rights",
    icon: <Copyright sx={{ color: customColor.primary }}/>,
    content: (
      <Typography
        variant="body1"
        paragraph
        sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8 }}
      >
        All content including trademark, copyrights, names etc. shall have the
        ownership of MsC only. No use of these made for any purpose whatsoever
        without the prior written authorization/consent of MsC is allowed.
      </Typography>
    ),
  },
  {
    id: 6,
    title: "No warranties",
    icon: <Warning sx={{ color: customColor.primary }}/>,
    content: (
      <Typography
        variant="body1"
        paragraph
        sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8 }}
      >
        MsC has compiled all the data, content and information posted on this
        Website through various sources. No representation is made, or warranty
        given as to the completeness or accuracy of such information. There is
        no express or implied warranty, regarding third party content. Despite
        of MsC's best endeavors, there is no warranty that this Website will be
        free of any computer viruses.
      </Typography>
    ),
  },
  {
    id: 7,
    title: "Limitation of liabilities",
    icon: <Shield sx={{ color: customColor.primary }}/>,
    content: (
      <Typography
        variant="body1"
        paragraph
        sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8 }}
      >
        MsC shall not be liable for any direct, indirect, special, consequential
        or other damages (including, without limitation, any lost profits,
        business interruption, loss of information or programs or other data on
        your information handling system) that are related to the use of, or the
        inability to use, the content, materials, and functions of this Website
        or any linked Website, even if MsC has expressly advised of the
        possibility of such damages.
      </Typography>
    ),
  },
  {
    id: 8,
    title: "Indemnification",
    icon: <Gavel sx={{ color: customColor.primary }}/>,
    content: (
      <Typography
        variant="body1"
        paragraph
        sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8 }}
      >
        You shall be liable to indemnify, defend and keep MsC harmless and its
        trustees, employees, associates, affiliates etc. ("Indemnified Parties")
        from and against any and all liability and costs, including, without
        limitation, reasonable attorneys' fees, incurred by the Indemnified
        Parties in connection with any claim arising out of any breach by you of
        these Terms and intellectual property rights.
      </Typography>
    ),
  },
  {
    id: 9,
    title: "Modification",
    icon: <Edit sx={{ color: customColor.primary }}/>,
    content: (
      <Typography
        variant="body1"
        paragraph
        sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8 }}
      >
        MsC reserves the rights, at its sole discretion, to change, modify, add,
        remove or impose restriction on features or service or any portion of
        these Terms of Use in whole or in part, at any time. Changes in these
        Terms of Use will be effective when notice of such change is posted.
        Your continued use of the Website after any changes to these Terms of
        Use are posted will be considered acceptance of those changes.
      </Typography>
    ),
  },
  {
    id: 10,
    title: "Applicable Laws",
    icon: <Balance sx={{ color: customColor.primary }}/>,
    content: (
      <Typography
        variant="body1"
        paragraph
        sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8 }}
      >
        This Website, including the Content and information contained herein,
        shall be governed by the laws of the Republic of India and the courts of
        New Delhi, India shall retain exclusive jurisdiction to entertain any
        proceedings in relation to any disputes arising out of the same.
      </Typography>
    ),
  },
];
