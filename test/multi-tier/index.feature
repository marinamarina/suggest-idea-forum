Feature: Sample multi-tier test

    Scenario: it renders
        When I request a module through the browser with parameters
            | page | bbc-morph-suggest-idea-forum1 |
        Then the page should contain "not been clicked"
