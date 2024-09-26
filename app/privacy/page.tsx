import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TermsOfService = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <Card>
        <CardHeader>
          <CardTitle>Outperform Agency - Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Introduction</AccordionTrigger>
              <AccordionContent>
                <p>This document describes how outperformagency.com (the "Site" or "we") collects, uses, and discloses your Personal Information when you visit the Site.</p>
                <p>"We" and "the Site" refer to the Company under the name Karpathian Lighthouse Limited with Tax Registration Number 10382033E, having its registered offices in Michael Koutsofta 1, 3031 Limassol, Cyprus with the distinctive title Outperform.</p>
                <p>The collection and processing of personal data is governed by EU and Cyprus law, particularly EU Regulation 2016/679 (GDPR), Cyprus Law No. 4624/2019, and relevant decisions, guidelines, and regulations of the Data Protection Authority.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Contact Information</AccordionTrigger>
              <AccordionContent>
                <p>For additional questions, more information about our privacy practices, or to make a complaint, please contact us:</p>
                <p>Email: hello@outperformagency.com</p>
                <p>Mail: Karpathian Lighthouse Limited, Michael Koutsofta 1, 3031 Limassol, Cyprus</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Collecting Personal Information</AccordionTrigger>
              <AccordionContent>
                <p>We collect information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information for customer support.</p>
                <h4 className="font-semibold mt-2">Device information</h4>
                <ul className="list-disc pl-5">
                  <li>Purpose: To load the Site accurately and perform analytics on Site usage.</li>
                  <li>Source: Collected automatically when you access our Site.</li>
                  <li>Disclosure: Shared with our processor Wordpress.</li>
                  <li>Information collected: Web browser version, IP address, time zone, cookie information, viewed sites/products, search terms, Site interactions.</li>
                </ul>
                <h4 className="font-semibold mt-2">Order information</h4>
                <ul className="list-disc pl-5">
                  <li>Purpose: To provide products/services, process payments, arrange shipping, provide invoices/confirmations, communicate, screen for potential risk or fraud, and provide information or advertising relating to our products or services.</li>
                  <li>Source: Collected from you.</li>
                  <li>Disclosure: Shared with our processor Wordpress.</li>
                  <li>Information collected: Name, billing address, shipping address, payment information, email address, phone number.</li>
                </ul>
                <h4 className="font-semibold mt-2">Customer support information</h4>
                <ul className="list-disc pl-5">
                  <li>Purpose: To provide customer support.</li>
                  <li>Source: Collected from you.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Sharing Personal Information</AccordionTrigger>
              <AccordionContent>
                <p>We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you. For example:</p>
                <ul className="list-disc pl-5">
                  <li>We use Wordpress to power our website. You can read more about how Wordpress uses your Personal Information here: https://wordpress.org/about/privacy/.</li>
                  <li>We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Behavioural Advertising</AccordionTrigger>
              <AccordionContent>
                <p>We use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.</p>
                <ul className="list-disc pl-5">
                  <li>We use Google Analytics to understand how our customers use the Site.</li>
                  <li>We use Facebook Pixel to monitor the effectiveness of our digital media investment.</li>
                </ul>
                <p>You can opt out of targeted advertising by visiting:</p>
                <ul className="list-disc pl-5">
                  <li>FACEBOOK - https://www.facebook.com/settings/?tab=ads</li>
                  <li>GOOGLE - https://www.google.com/settings/ads/anonymous</li>
                  <li>Digital Advertising Alliance's opt-out portal: https://optout.aboutads.info/</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Using Personal Information</AccordionTrigger>
              <AccordionContent>
                <p>We use your Personal Information to provide our services, including: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up to date on new products, services, and offers.</p>
                <h4 className="font-semibold mt-2">Lawful basis (GDPR)</h4>
                <p>For EEA residents, we process your personal information under the following lawful bases:</p>
                <ul className="list-disc pl-5">
                  <li>Your express consent</li>
                  <li>The performance of the contract between you and the Site</li>
                  <li>Compliance with our legal obligations</li>
                  <li>To protect your vital interests</li>
                  <li>To perform a task carried out in the public interest</li>
                  <li>For our legitimate interests, which do not override your fundamental rights and freedoms</li>
                </ul>
                <h4 className="font-semibold mt-2">Retention</h4>
                <p>We will retain your Personal Information for our records unless and until you ask us to erase this information.</p>
                <h4 className="font-semibold mt-2">Automatic decision-making</h4>
                <p>We do not engage in fully automated decision-making that has a legal or otherwise significant effect using customer data.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>GDPR Rights</AccordionTrigger>
              <AccordionContent>
                <p>If you are a resident of the EEA, you have the right to access the Personal Information we hold about you, to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information above.</p>
                <p>Your Personal Information will be initially processed in Ireland and then will be transferred outside of Europe for storage and further processing, including to Canada and the United States.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Cookies</AccordionTrigger>
              <AccordionContent>
                <p>We use cookies to remember your actions and preferences, and to optimize your experience on our Site.</p>
                <p>Most of the cookies we use are persistent and will expire between 30 minutes and two years from the date they are downloaded to your device.</p>
                <p>You can control and manage cookies through your browser settings. Removing or blocking cookies may negatively impact your user experience and parts of our website may no longer be fully accessible.</p>
                <h4 className="font-semibold mt-2">Do Not Track</h4>
                <p>We do not alter our data collection and usage practices when we detect a "Do Not Track" signal from your browser.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Changes to Privacy Policy</AccordionTrigger>
              <AccordionContent>
                <p>We may update this Privacy Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Complaints</AccordionTrigger>
              <AccordionContent>
                <p>If you are not satisfied with our response to your complaint, you have the right to lodge your complaint with the relevant data protection authority. You can contact your local data protection authority, or our supervisory authority here: contact@dpa.gr</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfService;