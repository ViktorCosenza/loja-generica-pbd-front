export default {
  methods: {
    get: {
      data: true,
      where: false
    },
    update: {
      data: true,
      where: true
    },
    delete: {
      data: false,
      where: true
    },
    insert: {
      data: true,
      where: false
    }
  },
  tables: {
    functionarios: {
      data: {

      },
      where: {

      }
    },
    produtos: {
      data: {

      },
      where: {

      }
    },
    cargos: {
      data: {

      },
      where: {

      }
    },
    tipos: {
      data: {

      },
      where: {

      }
    },
    lojas: {
      data: {

      },
      where: {

      }
    },
    cidades: {
      data: {

      },
      where: {

      }
    },
    vendas: {
      data: {

      },
      where: {

      }
    },
    estoque: {
      data: {

      },
      where: {

      }
    }
  }
}
