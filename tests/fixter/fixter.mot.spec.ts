import { test } from '../../src/Fixter/base';

const TEST_INPUT = [
  {
    "service": "MOT",
    "preQuoteForm": {
      "postcode": "N12 8HG",
      "vrm": "YC14YHG"
    },
    "specificService": "Premium MOT"
  },
  {
    "service": "Car servicing",
    "preQuoteForm": {
      "postcode": "N12 8HG",
      "vrm": "YC14YHG"
    },
    "specificService": "Major service"
  },
  {
    "service": "Timing belt replacement",
    "preQuoteForm": {
      "postcode": "N12 8HG",
      "vrm": "YC14YHG"
    },
    "specificService": "Timing Belt Replacement"
  },
  // {
  //   "service": "Brake pads replacement",
  //   "preQuoteForm": {
  //     "postcode": "N12 8HG",
  //     "vrm": "YC14YHG"
  //   }
  // },
  // {
  //   "service": "Clutch kit replacement",
  //   "preQuoteForm": {
  //     "postcode": "N12 8HG",
  //     "vrm": "YC14YHG"
  //   }
  // },
  // {
  //   "service": "Spark plugs replacement",
  //   "preQuoteForm": {
  //     "postcode": "N12 8HG",
  //     "vrm": "YC14YHG"
  //   }
  // },
  // // {
  // //   "service": "Wing mirror replacement",
  // //   "preQuoteForm": {
  // //     "postcode": "N12 8HG",
  // //     "vrm": "YC14YHG"
  // //   }
  // // },
  // {
  //   "service": "Headlight bulb replacement",
  //   "preQuoteForm": {
  //     "postcode": "N12 8HG",
  //     "vrm": "YC14YHG"
  //   }
  // },
]

test.describe('New Customer Flow', () => {
  test.beforeEach(async ({ page, Home }) => {
    await page.goto('/');
    await Home.acceptCookies()
  })
  TEST_INPUT.forEach(property => {
    test(property.service, async ({Home, Services, AddService}) => {
      await Home.openServicesCatalogueFrom("Hero Section")
      await Services.select(property.service)
      await Services.completePreQuoteForm(property.preQuoteForm)
      await AddService.selectAndContinue(property.service, property.specificService)
    });
  });
})

