methods: {
    parseApiAndReloadData(data) {
      let message = data.message;
      if (message) {
        var array = message.split('#');
        var event = array[0];
        var payload = array[1];
        // switch (type) {
        //   case 'brand':
        //     this.reloadBrandApiData(event, payload);
        //     break;
        //   case 'factory':
        //     this.reloadFactoryApiData(event, payload);
        //     break;
        //   case 'vendor':
        //     this.reloadVendorApiData(event, payload);
        //     break;
        //   default: 
            this.reloadApiData(event, payload);
        //     break;
        // }
       
      }
    },

    reloadApiData(event, payload = null) {
      switch (event) {

        case 'update_order':
          Store.dispatch('fetchOrders');
          if (payload === 'accepted' || payload === 'rejected') {
            // To be shown on material procument page
            // Store.dispatch('fetchFilteredOrders', { status: 'accepted' });
            if (payload === 'accepted') {
              SweetAlert.showSweetAlert('Great', 'Order Accepted')
            } else if (payload === 'rejected') {
              SweetAlert.showSweetAlert('Done', 'Order Rejected')
            }
          } else if (payload) {
            SweetAlert.showSweetAlert('Alert', payload)
          }
          break;

        case 'new_ready':
          if (payload) {
            SweetAlert.showSweetAlert('Done', 'Ready Added Successfully')
            Store.dispatch('fetchProductLedger', { ledger: payload });
          }
          break;

        case 'new_dispatch':
          if (payload) {
            SweetAlert.showSweetAlert('Done', 'Dispatched Successfully')
            Store.dispatch('fetchProductLedger', { ledger: payload });
          }
          break;

        case 'new_order':
          Store.dispatch('fetchOrders');
          SweetAlert.showSweetAlert('Ypee!', 'New Order Arrived')
          break;

        case 'new_demand':
          if (payload) {
            SweetAlert.showSweetAlert('Done', 'New Demand Arrived')
            Store.dispatch('fetchProductLedger', { ledger: payload });
          }
          break;

        case 'update_dispatch':
          if (payload) {
            SweetAlert.showSweetAlert('Yes', 'Dispatch Recevied')
          }
          break;

        default: break;
      }
    },
    // reloadApiData(event, payload = null) {
    //   Store.dispatch('fetchDashboard');
    //   switch (event) {
    //     case 'new_order':
    //       SweetAlert.showSweetAlert('Ypee!', 'New Order Arrived')
    //       Store.dispatch('fetchNewOrders');
    //       break;

    //     case 'update_order':
    //       Store.dispatch('fetchNewOrders');
    //       if (payload === 'accepted' || payload === 'rejected') {
    //         Store.dispatch('fetchFilteredOrders', { status: 'accepted' });
    //         if (payload === 'accepted') {
    //           SweetAlert.showSweetAlert('Great', 'Order Accepted')
    //         } else if (payload === 'rejected') {
    //           SweetAlert.showSweetAlert('Done', 'Order Rejected')
    //         }
    //       } else if (payload) {
    //         SweetAlert.showSweetAlert('Alert', payload)
    //       }
    //       break;

    //     case 'new_ready':
    //       if (payload) {
    //         SweetAlert.showSweetAlert('Done', 'Ready Added Successfully')
    //         Store.dispatch('fetchStockLedger', { ledger_sid: payload });
    //       }
    //       break;

    //     case 'new_demand':
    //       if (payload) {
    //         SweetAlert.showSweetAlert('Done', 'New Demand Arrived')
    //         Store.dispatch('fetchStockLedger', { ledger_sid: payload });
    //       }
    //       break;

    //     case 'new_dispatch':
    //       if (payload) {
    //         SweetAlert.showSweetAlert('Done', 'Dispatched Successfully')
    //         Store.dispatch('fetchStockLedger', { ledger_sid: payload });
    //       }
    //       break;

    //     case 'update_dispatch':
    //       if (payload) {
    //         SweetAlert.showSweetAlert('Yes', 'Dispatch Updated')
    //         Store.dispatch('fetchDispatches');
    //       }
    //       break;

    //     case 'new_purchase':
    //       SweetAlert.showSweetAlert('Done', 'New Purchase Created')
    //       Store.dispatch('fetchDispatches');
    //       Store.dispatch('fetchSales');

    //       break;

    //     case 'new_adjustment':
    //       if (payload) {
    //         SweetAlert.showSweetAlert('Done', 'New Adjustment Created')
    //         Store.dispatch('fetchStockLedger', { ledger_sid: payload });
    //       }
    //       break;

    //     case 'new_chat':
    //       if (payload) {
    //         Store.dispatch('reloadLedgerChats', { ledger_sid: payload })
    //       }
    //       break;

    //     default: break;
    //   }
    // },
    // reloadBrandApiData(event, payload = null) {
      
    //   Store.dispatch('brandy/fetchMydash');

    //   switch (event) {

    //     case 'update_order':
    //       Store.dispatch('fetchOrders');
    //       if (payload === 'accepted' || payload === 'rejected') {
    //         // To be shown on material procument page
    //         // Store.dispatch('fetchFilteredOrders', { status: 'accepted' });
    //         if (payload === 'accepted') {
    //           SweetAlert.showSweetAlert('Great', 'Order Accepted')
    //         } else if (payload === 'rejected') {
    //           SweetAlert.showSweetAlert('Done', 'Order Rejected')
    //         }
    //       } else if (payload) {
    //         SweetAlert.showSweetAlert('Alert', payload)
    //       }
    //       break;

    //     case 'new_ready':
    //       if (payload) {
    //         SweetAlert.showSweetAlert('Done', 'Ready Added Successfully')
    //         Store.dispatch('fetchProductLedger', { ledger: payload });
    //       }
    //       break;

    //     case 'new_dispatch':
    //       if (payload) {
    //         SweetAlert.showSweetAlert('Done', 'Dispatched Successfully')
    //         Store.dispatch('fetchProductLedger', { ledger: payload });
    //       }
    //       break;

    //     default: break;
    //   }
    // },
    // reloadFactoryApiData(event, payload = null) {
      
    //   Store.dispatch('factory/fetchMydash');

    //   switch (event) {

    //     case 'new_order':
    //       Store.dispatch('fetchOrders');
    //       SweetAlert.showSweetAlert('Ypee!', 'New Order Arrived')
    //       break;

    //     case 'update_order':
    //       Store.dispatch('fetchOrders');
    //       if (payload === 'accepted' || payload === 'rejected') {
    //         // To be shown on material procument page
    //         // Store.dispatch('fetchFilteredOrders', { status: 'accepted' });
    //         if (payload === 'accepted') {
    //           SweetAlert.showSweetAlert('Great', 'Order Accepted')
    //         } else if (payload === 'rejected') {
    //           SweetAlert.showSweetAlert('Done', 'Order Rejected')
    //         }
    //       } else if (payload) {
    //         SweetAlert.showSweetAlert('Alert', payload)
    //       }
    //       break;

    //     case 'new_demand':
    //       if (payload) {
    //         SweetAlert.showSweetAlert('Done', 'New Demand Arrived')
    //         Store.dispatch('fetchProductLedger', { ledger: payload });
    //       }
    //       break;

    //     case 'update_dispatch':
    //       if (payload) {
    //         SweetAlert.showSweetAlert('Yes', 'Dispatch Recevied')
    //       }
    //       break;

    //     default: break;
    //   }
    // },
  }