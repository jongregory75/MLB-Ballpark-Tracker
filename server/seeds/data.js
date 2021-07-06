const apiPull = () => {
  window.server_path = {
    game_data: {
      server: "http://statsapi.mlb.com",
      client: "https://statsapi.mlb.com",
      siteCode: "mlb",
    },
    cms_data: {
      server: "http://content.mlb.com",
      client: "https://content.mlb.com",
      app_geo_directory: "/mlb",
    },
    cms_page_building_data: {
      lambda: "http://pagebuilder.mlb.com/prod/v2/",
      server: "http://content.mlb.com",
      client: "https://content.mlb.com",
      app_geo_directory: "/mlb",
    },
    cms_dapi: {
      server: "https://dapi.cms.mlbinfra.com/v2/content",
      client: "https://dapi.cms.mlbinfra.com/v2/content",
    },
    cms_vsm: {
      server: "https://feen.cms.mlbinfra.com/cms/api/public",
      client: "https://feen.cms.mlbinfra.com/cms/api/public",
    },
    cms_graphql: "https://graphql.cms.mlbinfra.com/graphql",
    graphql_service: "https://content-service.mlb.com",
    form_service: "https://forms.mlbam.net/form-service",
    uistatic: "//builds.mlbstatic.com/mlb.com",
    mlbstatic: "//www.mlbstatic.com/mlb.com",
    uistatic_clubcss: "//css.mlbstatic.com/mlb.com",
    uistatic_video: "//www.mlbstatic.com/mlb.com",
    secure: "https://www.mlb.com",
    server: "https://www.mlb.com",
    search: {
      server: "http://search-api.mlb.com",
      client: "https://search-api.mlb.com",
      app_geo_directory: "mlb_global",
    },
    appnexus: "https://acdn.adnxs.com/prebid/c/mlb_prebidv1/pb.js",
    ticketing_client: {
      server: "http://www.ticketing-client.com",
      client: "https://www.ticketing-client.com",
    },
    box_office: {
      client: "https://prod.boxoffice.mlb.com",
      id: "90RCFSl9MnvDFxJcwep+qQLNYIbUseoJxS39U_+b",
    },
    authentication: {
      okta_css:
        "https://www.mlbstatic.com/mlb.com/vendor/mlb-okta/css/okta-sign-in.min.css",
      okta_theme_css:
        "https://www.mlbstatic.com/mlb.com/vendor/mlb-okta/css/okta-widget.css",
      okta_script:
        "https://www.mlbstatic.com/mlb.com/vendor/mlb-okta/mlb-okta.js",
    },
    mlbv1: { https: "https://securea.mlb.com", http: "http://mlb.mlb.com" },
    mlbv2: { https: "https://msecurea.mlb.com", http: "http://m.mlb.com" },
    lookup: {
      server: "http://lookup-service-prod.mlb.com/json",
      client: "https://lookup-service-prod.mlb.com/json",
    },
    stitch: "https://bdfed.stitch.mlbinfra.com",
  };
};
