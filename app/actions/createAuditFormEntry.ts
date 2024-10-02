'use server'

import Airtable from 'airtable'

// Initialize Airtable
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!)

interface AuditFormData {
  name: string
  email: string
  businessName: string
  websiteUrl: string
  region: string
  monthlySpend: string
}

export async function createAuditFormEntry(data: AuditFormData) {
  try {
    const record = await base('Contacts').create([
      {
        fields: {
          Name: data.name,
          Email: data.email,
          'Business Name': data.businessName,
          'Website URL': data.websiteUrl,
          Region: data.region,
          'Monthly Spend': data.monthlySpend,
          'Submission Date': new Date().toISOString(),
        },
      },
    ])

    return { success: true, id: record[0].id }
  } catch (error) {
    console.error('Error creating Airtable record:', error)
    return { success: false, error: 'Failed to create record' }
  }
}