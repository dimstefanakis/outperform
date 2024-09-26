import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TermsOfService = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <Card>
        <CardHeader>
          <CardTitle>Karpathian Lighthouse Limited - Terms of Service</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This website is operated by Karpathian Lighthouse Limited. Throughout the site, the terms "we", "us" and "our" refer to Lighthouse Limited. Lighthouse Limited offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="overview">
              <AccordionTrigger>Overview</AccordionTrigger>
              <AccordionContent>
                <p>By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink.</p>
                <p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services.</p>
                <p>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website.</p>
                <p>Our store is hosted on Wordpress. They provide us with the online e-commerce platform that allows us to sell our products and services to you.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section1">
              <AccordionTrigger>Section 1 - Accuracy, Completeness and Timeliness of Information</AccordionTrigger>
              <AccordionContent>
                <p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information.</p>
                <p>This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section2">
              <AccordionTrigger>Section 2 - Services</AccordionTrigger>
              <AccordionContent>
                <p>Certain Services may be available exclusively online through the website. We reserve the right, but are not obligated, to limit the sales of our Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis.</p>
                <p>We do not warrant that the quality of any Services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section3">
              <AccordionTrigger>Section 3 - Optional Tools</AccordionTrigger>
              <AccordionContent>
                <p>We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. You acknowledge and agree that we provide access to such tools "as is" and "as available" without any warranties, representations or conditions of any kind and without any endorsement.</p>
                <p>Any use by you of the optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).</p>
              </AccordionContent>
            </AccordionItem>

            {/* Add more AccordionItems for each section */}

            <AccordionItem value="section16">
              <AccordionTrigger>Section 16 - Contact Information</AccordionTrigger>
              <AccordionContent>
                <p>Questions about the Terms of Service should be sent to us at hello@outperform.com.</p>
                <p>Our contact information is posted below:</p>
                <p>Karpathian Lighthouse Limited</p>
                <p>Michael Koutsofta 1</p>
                <p>3031 Limassol</p>
                <p>Cyprus</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfService;