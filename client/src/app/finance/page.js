import React from 'react'
import EMICalculator from '../components/EMICalculator'
import Brands from '../components/Brands'
import FinanceSteps from '../components/FinanceSteps'
import { financeFAQs } from '../data/financeFAQs'
import Faq from '../components/Faq'

export default function FinancePage() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <EMICalculator />
      <Brands />
      <FinanceSteps />
      <Faq FAQs={financeFAQs} title="Sell" />
    </div>
  )
}
