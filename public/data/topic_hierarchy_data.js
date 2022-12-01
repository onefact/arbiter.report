const data = [
    {
      name: "Top Level",
      children: [
        {
          name: "Level 2: A",
          children: [
            { name: "Level 3A: A" },
            { name: "Level 3A:B" },
          ]
        },
        {
          name: "Level 2: B",
          children: [
            { name: "Level 3B: A" },
            {
              name: "Level 3B:B",
              children: [
                { name: "Level 3BB:1" },
                { name: "Level 3BB:2" },
               
              ]
            }
          ]
        }
      ]
    }
  ];
  
  export default data;
  