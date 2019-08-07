/*
'use strict';

/!**
 * @ngdoc function
 * @name rbApp.controller:seedController
 * @description
 * # SeedCtrl
 * Controller of the rbApp
 *!/
angular.module('rbApp')
  .controller('seedController', function (){

    const db = firebase.firestore();

    function addHotDogs(){
      const collection = db.collection("hotdogs");

      const productList = [

        {
          extraEspecial: {
            name: 'Hot dog Extra especial',
            description: '2 salsichas, bacon, milho, ervilha, catchup, maionese temperada, barbecue, catupiry, cheddar, purê e batata palha.',
            price: 12.50,
            order: 1,
            images: [
              '/images/cardapio/hotdogs/hotdog-especial.png'
            ],
            show: true
          }
        },

        {
          simples: {
            name: 'Hot dog simples',
            description: '1 salsicha, milho, ervilha, catchup, maionese temperada, purê e batata palha.',
            price: 10,
            order: 1,
            images: [
              '/images/cardapio/hotdogs/hotdog-simples.png'
            ],
            show: true
          }
        },

        {
          completo: {
            name: 'Hot dog completo',
            description: '2 salsichas, milho, ervilha, catchup, maionese temperada, barbecue, purê e batata palha.R$ 11,00',
            price: 11,
            order: 1,
            images: [
              '/images/cardapio/hotdogs/hotdog-completo.png'
            ],
            show: true
          }
        },

        {
          especial: {
            name: 'Hot dog especial',
            description: '2 salsichas, milho, ervilha, catchup, maionese temperada, barbecue, catupiry, cheddar, purê e batata palha.',
            price: 12.50,
            order: 1,
            images: [
              '/images/cardapio/hotdogs/hotdog-especial.png'
            ],
            show: true
          }
        },

      ];

      saveCollection(collection, productList);
    }

    function addBeverages(){
      const collection = db.collection("bebidas");

      const productList = [

        {
          refrigeranteLata: {
            name: 'Refrigerante lata',
            price: 3.50,
            order: 1,
            show: true
          }
        },

        {
          cervejasLata: {
            name: 'Cervejas lata',
            price: 5,
            order: 2,
            show: true
          }
        },

        {
          heineken: {
            name: 'Heineken 600ml',
            price: 12,
            order: 3,
            show: true
          }
        },

        {
          skolLatao: {
            name: 'Skol Latão',
            price: 10,
            order: 4,
            show: true
          }
        },

        {
          refrigerante600ml: {
            name: 'Refrigerante 600ml',
            price: 3,
            order: 5,
            show: true
          }
        },

        {
          refrigerante2l: {
            name: 'Refrigerante 2 litros',
            price: 7,
            order: 6,
            show: true
          }
        },

        {
          aguaMineral: {
            name: 'Água Mineral',
            price: 3,
            order: 7,
            show: true
          }
        },

        {
          h20hLimao: {
            name: 'H2OH limão 500ml',
            price: 6,
            order: 8,
            show: true
          }
        },

      ];

      saveCollection(collection, productList);
    }

    function addHamburgers(){
      const collection = db.collection("hamburgers");

      const productList = [

        {
          mineirinho: {
            name: 'Mineirinho',
            description: 'Pão de queijo (conforme disponibilidade: 10 unid. diárias), Maionese temperada, Polenguinho, Hambúrguer de costela artesanal 90 grs, Ketchup, Bacon, Cheddar',
            price: 18.90,
            order: 1,
            images: [
              '/images/cardapio/hamburger/mineirinho.png'
            ],
            show: true
          }
        },

        {
          costela: {
            name: 'Costela',
            description: 'Hambúrguer de costela, Polenguinho, Cheddar, Bacon,  Maionese temperada e Ketchup',
            price: 16,
            order: 2,
            images: [
              '/images/cardapio/hamburger/costela.png'
            ],
            show: true
          }
        },

        {
          chapaQuente: {
            name: 'Chapa Quente',
            description: 'Pão de queijo, Hambúrguer de costela, Polenguinho, Cheddar, Bacon, Maionese temperada e Ketchup',
            price: 16,
            order: 3,
            images: [
              '/images/cardapio/hamburger/chapa-quente.png'
            ],
            show: true
          }
        },

        {
          hamburguerPernil: {
            name: 'Hambúrguer de pernil',
            description: 'Hambúrguer de pernil suíno, Queijo, Alface, Tomate, Bacon, Cebola agridoce, Maionese temperada e Ketchup.',
            price: 18.50,
            order: 4,
            images: [
              '/images/cardapio/hamburger/hamburguerPernil.png'
            ],
            show: true
          }
        },

        {
          carneBacon: {
            name: 'Hambúrguer de carne bacon',
            description: 'Queijo, Alface, tomate, bacon, maionese temperada, ketchup e Barbecue.',
            price: 18.50,
            order: 5,
            images: [
              '/images/cardapio/hamburger/hamburguer-carne-bacon.png'
            ],
            show: true
          }
        },

        {
          carneEgg: {
            name: 'Hambúrguer de carne egg',
            description: 'Hamburguer de carne artesanal 90g, Ovo, Queijo, Alface, Tomate, Bacon, Maionese temperada, Ketchup e Barbecue.',
            price: 20,
            order: 6,
            images: [
              '/images/cardapio/hamburger/hamburguer-egg.png'
            ],
            show: true
          }
        },

        {
          carne: {
            name: 'Hambúrguer de carne',
            description: 'Hamburguer de carne artesanal 90g, Queijo, Alface, Tomate, Maionese temperada, Ketchup e Barbecue.',
            price: 18,
            order: 7,
            images: [
              '/images/cardapio/hamburger/hamburguer-carne.png'
            ],
            show: true
          }
        },

        {
          frango: {
            name: 'Hambúrguer de frango',
            description: 'Pão, hamburguer de frango 90g, Queijo mussarela, Alface americana, Tomate, Bacon, Cebola agridoce, Maionese temperada, Ketchup e Barbecue.',
            price: 19.50,
            order: 8,
            images: [
              '/images/cardapio/hamburger/hamburguer-frango.png'
            ],
            show: true
          }
        },

      ];

      saveCollection(collection, productList);
    }

    function addAcai(){
      const collection = db.collection("acai");

      const productList = [

        {
          acai500: {
            name: 'Açaí',
            description: 'Açaí 500ml + 2 acompanhamentos. Acompanha: leite condensado + 2 acompanhamentos',
            price: 12,
            order: 1,
            images: [
              '/images/cardapio/acai/acai350.png'
            ],
            show: true
          }
        },

        {
          acai350: {
            name: 'Açaí',
            description: 'Açaí 350ml + 2 acompanhamentos. Acompanha: leite condensado + 2 acompanhamentos',
            price: 12,
            order: 1,
            images: [
              '/images/cardapio/acai/acai350.png'
            ],
            show: true
          }
        },

        {
          acai700: {
            name: 'Açaí 700ml + 5 acompanhamentos. ',
            description: 'Acompanha: leite condensado + 4 acompanhamentos',
            price: 24,
            order: 2,
            images: [
              '/images/cardapio/acai/acai700.png'
            ],
            show: true
          }
        },

        {
          barcaP: {
            name: 'Barca de açaí ( p ) com 6 acompanhamentos',
            description: 'Barca de açaí ( g ) com 6 acompanhamentos + leite condensado.',
            price: 40,
            order: 3,
            images: [
              '/images/cardapio/acai/barcaG.png'
            ],
            show: true
          }
        },

        {
          barcaG: {
            name: 'Barca de açaí ( g ) com 6 acompanhamentos',
            description: 'Barca de açaí ( g ) com 6 acompanhamentos + leite condensado.',
            price: 40,
            order: 3,
            images: [
              '/images/cardapio/acai/barcaG.png'
            ],
            show: true
          }
        },

        {
          barcaM: {
            name: 'Barca de açaí ( m ) + 4 acompanhamentos',
            description: 'Barca de açaí + 4 acompanhamentos + leite condensado ( temos itens como Nutella, kit-kat, laka)',
            price: 24,
            order: 4,
            images: [
              '/images/cardapio/acai/barcaM.png'
            ],
            show: true
          }
        }

      ];

      saveCollection(collection, productList);
    }

    function addAcaiComplementosExtra(){
      const collection = db.collection("acai_complementos_extra");

      const productList = [

        {
          NUTELLA: {
            name: 'NUTELLA',
            price: 6,
            show: true
          }
        },

        {
          KITKAT: {
            name: 'KIT-KAT',
            price: 4,
            show: true
          }
        },

        {
          CONFETE_CHOC: {
            name: 'CONFETE DE CHOC',
            price: 2,
            show: true
          }
        },

        {
          TWIX: {
            name: 'TWIX',
            price: 2,
            show: true
          }
        },

        {
          DADINHOS: {
            name: 'DADINHOS (3 und.)',
            price: 2.5,
            show: true
          }
        },

        {
          OVOMALTINE: {
            name: 'OVOMALTINE',
            price: 3,
            show: true
          }
        },

        {
          KINDER: {
            name: 'KINDER',
            price: 4,
            show: true
          }
        },

        {
          SONHO_DE_VALSA: {
            name: 'SONHO DE VALSA',
            price: 2,
            show: true
          }
        },

        {
          BANANINHA_FINI: {
            name: 'BANANINHA (FINI)',
            price: 2.5,
            show: true
          }
        },

        {
          TIRINHAS_FINI: {
            name: 'TIRINHAS (FINI)',
            price: 2,
            show: true
          }
        },

        {
          PRESTIGIO: {
            name: 'PRESTÍGIO',
            price: 3,
            show: true
          }
        },

        {
          DIAMANTE_NEGRO: {
            name: 'DIAMANTE NEGRO',
            price: 3,
            show: true
          }
        },

        {
          LAKA: {
            name: 'LAKA',
            price: 3,
            show: true
          }
        },

        {
          SNICKERS: {
            name: 'SNICKERS',
            price: 3,
            show: true
          }
        },

        {
          MARSHMELLOW: {
            name: 'MARSHMELLOW',
            price: 2,
            show: true
          }
        },

      ];

      saveCollection(collection, productList);
    }

    function addAcaiComplementos(){
      const collection = db.collection("acai_complementos");

      const productList = [

        {
          LeiteNinho: {
            name: 'Leite Ninho',
            show: true
          }
        },

        {
          LeiteCondensado: {
            name: 'Leite condensado',
            show: true
          }
        },

        {
          ChocoBall: {
            name: 'Choco Ball',
            show: true
          }
        },

        {
          Confete: {
            name: 'Confete',
            show: true
          }
        },

        {
          ChocolateGranulado: {
            name: 'Chocolate Granulado',
            show: true
          }
        },

        {
          Sucrilhos: {
            name: 'Sucrilhos',
            show: true
          }
        },

        {
          BalaDeGoma: {
            name: 'Bala de goma',
            show: true
          }
        },

        {
          Suspiro: {
            name: 'Suspiro',
            show: true
          }
        },

        {
          Granola: {
            name: 'Granola',
            show: true
          }
        },

        {
          Dentadura: {
            name: 'Dentadura',
            show: true
          }
        },

        {
          Pacoca: {
            name: 'Paçoca',
            show: true
          }
        },

        {
          FarofaDeCaju: {
            name: 'Farofa de cajú',
            show: true
          }
        },

        {
          MinhoquinhasAcidas: {
            name: 'Minhoquinhas (ácidas)',
            show: true
          }
        },

        {
          CanudoBiju: {
            name: 'Canudo  Bijú',
            show: true
          }
        },

        {
          Caldas: {
            name: 'Caldas Caramelo, Chocolate, Morango',
            show: true
          }
        },

        {
          Frutas: {
            name: 'Frutas da estação',
            show: true
          }
        }
      ];

      saveCollection(collection, productList);
    }

    function addTapiocas(){
      const collection = db.collection("tapiocas");

      const productList = [

        {
          tapiocaDoce: {
            name: 'Tapioca doce',
            description: 'Tapioca doce, selecione o seu sabor.',
            price: 8.50,
            order: 1,
            images: [
              '/images/cardapio/tapiocas/doce.png'
            ],
            show: true
          }
        },

        {
          tapiocaSalgada: {
            name: 'Tapioca salgada',
            description: 'Tapioca salgada, selecione o seu sabor.',
            price: 24,
            order: 2,
            images: [
              '/images/cardapio/tapiocas/salgada.png'
            ],
            show: true
          }
        }

      ];

      saveCollection(collection, productList);
    }

    function addPorcoes(){
      const collection = db.collection("porcoes");

      const productList = [

        {
          fritasPequena: {
            name: 'Fritas pequena (180g)',
            description: 'Porção de fritas pequena',
            price: 8,
            order: 0,
            images: [
              '/images/cardapio/porcoes/fritasMedia.png'
            ],
            show: true
          }
        },

        {
          fritasMedia: {
            name: 'Fritas média (350g)',
            description: 'Porção de fritas média',
            price: 15,
            order: 1,
            images: [
              '/images/cardapio/porcoes/fritasMedia.png'
            ],
            show: true
          }
        },

        {
          fritasGrande: {
            name: 'Fritas grande (500g)',
            description: 'Porção de fritas grande',
            price: 25,
            order: 2,
            images: [
              '/images/cardapio/porcoes/fritasGrande.png'
            ],
            show: true
          }
        },

        {
          nuggetsPequeno: {
            name: 'Nuguet\'s pequena',
            description: 'Porção de nuguet\'s pequena 8 unidades',
            price: 8,
            order: 4,
            images: [
              '/images/cardapio/porcoes/nuggetsPequeno.png'
            ],
            show: true
          }
        },

        {
          nuggetsGrande: {
            name: 'Nuguet\'s grande',
            description: 'Porção de nuguet\'s grande 10 unidades',
            price: 10,
            order: 5,
            images: [
              '/images/cardapio/porcoes/nuggetsGrande.png'
            ],
            show: true
          }
        },

        {
          cebolaEmpanadaGrande: {
            name: 'Cebola empanada grande',
            description: 'Porção de cebola empanada grande 15 unidades',
            price: 16,
            order: 6,
            images: [
              '/images/cardapio/porcoes/cebola.png'
            ],
            show: true
          }
        },

        {
          cebolaEmpanadaPequena: {
            name: 'Cebola empanada pequena',
            description: 'Porção de cebola empanada grande 5 unidades',
            price: 5,
            order: 7,
            images: [
              '/images/cardapio/porcoes/cebola.png'
            ],
            show: true
          }
        },

        {
          calabresa: {
            name: 'Barca de porção de calabresa',
            description: 'Porção de calabresa + pão + maionese temperada (tudo individual)',
            price: 25,
            order: 3,
            images: [
              '/images/cardapio/porcoes/calabresa.png'
            ],
            show: true
          }
        },

        {
          barcaDiversos: {
            name: 'Barca de porções',
            description: 'Porção de cebola empanada, batata frita e calabresa.',
            price: 45,
            order: 8,
            images: [
              '/images/cardapio/porcoes/diversos.png'
            ],
            show: true
          }
        },

      ];

      saveCollection(collection, productList);
    }

    function addSobremesas(){
      const collection = db.collection("sobremesas");

      const productList = [

        {
          miniChurros: {
            name: 'Mini churros',
            description: 'Mini churros sabor doce de leite 10 unidades + acompanhamentos',
            price: 18.50,
            order: 1,
            images: [
              '/images/cardapio/sobremesas/miniChurros.png'
            ],
            show: true
          }
        },

        {
          espetoMorango: {
            name: 'Espeto de morango',
            description: 'Coberto com chocolate + acompanhamentos',
            price: 9,
            order: 2,
            images: [
              '/images/cardapio/sobremesas/morangoNoEspeto.png'
            ],
            show: true
          }
        },

        {
          boloDePote: {
            name: 'Bolos de pote',
            description: 'Fabricados diariamente, saborosos e molhadinhos',
            price: 8.50,
            order: 2,
            images: [
              '/images/cardapio/sobremesas/boloDePote.png'
            ],
            show: true
          }
        }

      ];

      saveCollection(collection, productList);
    }

    function saveCollection(collection, itemList) {
      itemList.forEach((val, key) => {
        Object.keys(itemList[key]).map(product_key => {
          collection.doc(product_key).set(itemList[key][product_key])
            .then(function(docRef) {
              console.log("Document written with ID: ", docRef);
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });
        });
      });
    }


   /!*
     addHotDogs();
     addHamburgers();
     addAcai();
     addAcaiComplementos();
      addAcaiComplementosExtra();
      addHotDogs();
      addBeverages();
      addTapiocas();
      addPorcoes();
      addSobremesas();*!/
  });
*/
