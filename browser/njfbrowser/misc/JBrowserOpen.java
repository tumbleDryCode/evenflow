package njfbrowser.misc;

import njfbrowser.main.adminApp;

import java.awt.*;
import java.awt.event.*;
import java.io.DataInputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.PrintStream;
import java.net.URLEncoder;
import java.util.Properties;


public class JBrowserOpen extends Dialog
        implements ActionListener, KeyListener, ItemListener, MouseListener {
    public class JBrowserOpenWindowListener extends WindowAdapter {

        public void windowClosing(WindowEvent windowevent) {
            adminApp.qlinksframe1 = false;
            dispose();
        }

        public JBrowserOpenWindowListener() {
        }
    }


    public void jbodummy() {

        if (isbolder) {
            resize(300, 500);
            setLocation(320, 20);
            isbolder = false;
            return;
        } else {
		show();
            // parent.setQstatus(parent.aplangstrings.getProperty("text014"), false);
        }

    }


    public void ItemListener(ItemEvent itemevent) {
    }

    public void keepitSmaller() {
        resize(280, 53);
        setLocation(300, 15);
        isbolder = true;
    }

    public void showlinkOns() {
        httpconfig = new Properties();
        try {
            inifile = "cbox/slic/01exe.ini";
            FileInputStream fileinputstream = new FileInputStream("cbox/prefs/links.prfs");
            DataInputStream datainputstream = new DataInputStream(fileinputstream);
            httpconfig.load(fileinputstream);
            String s = URLEncoder.encode(httpconfig.getProperty("search1"));
            String s1;
            while ((s1 = datainputstream.readLine()) != null)
                searchChoice.addItem(s);
            datainputstream.close();
            fileinputstream.close();
            searchChoice.addItem(s);
            return;
        } catch (Exception _ex) {
            new Messdialog1(parent, parent.aplangstrings.getProperty("text045"));
        }
    }

    public void showdaquickie() {
        urlEdit.setText(quicklist.getSelectedItem());
        urlEdit.requestFocus();
    }

    public void mouseClicked(MouseEvent mouseevent) {
    }

    public void mousePressed(MouseEvent mouseevent) {
        if (mouseevent.getSource() == addchan) {
            String s = urlEdit.getText();
            if (s.trim().length() < 1 || s == "quickLinks")
                new Messdialog1(parent, parent.aplangstrings.getProperty("text046"));
            else
                saveWatchlist();
        }
        if (mouseevent.getSource() == searchbut)
            searchit();
        if (mouseevent.getSource() == chandelete) {
            String s1 = quicklist.getSelectedItem();
            int i = quicklist.getSelectedIndex();
            if (i == 0 || s1 == null) {
                new Messdialog1(parent, parent.aplangstrings.getProperty("text048"));
            } else {
                int j = quicklist.getSelectedIndex();
                quicklist.remove(j);
                savenewlist();
            }
        }
        if (mouseevent.getSource() == btnbrowlaunch) {
            String s = urlEdit.getText();
            if (s.trim().length() < 1 || s == "quickLinks")
                new Messdialog1(parent, parent.aplangstrings.getProperty("text111"));
            else
                parent.favs(s);
        }
        if (mouseevent.getSource() == bold)
            isitBolder();
    }

    public void searchit() {
        String s = searchChoice.getSelectedItem();
        String s1 = searchinput.getText();
        String s2 = s1.replace(' ', '+');
        String s3 = parent.server + "pushdex/pt/" + s + ".shtml?" + s2;
        if (s.length() < 1 || s1.trim().length() < 1) {
            new Messdialog1(parent, parent.aplangstrings.getProperty("text047"));
            return;
        } else {
            parent.navigate(s3);
            return;
        }
    }

    public JBrowserOpen(adminApp myslic, String s, int browint) {


        super(myslic, "Quick-Links");
        parent = myslic;
        thebrow = browint;


        if (browint == 0) {

            setTitle("Quick-Links MainBrowser");
        } else if (browint == 1) {
            setTitle("Quick-Links TopBrowser");
        } else if (browint == 2) {
            setTitle("Quick-Links MiddleBrowser");
        } else if (browint == 3) {
            setTitle("Quick-Links BottomBrowser");
        } else {
            setTitle("Quick-Links MainBrowser");
        }

        setBackground(new Color(225, 225, 225));
        setForeground(new Color(225, 225, 225));
        tracker = new MediaTracker(this);
        img1 = Toolkit.getDefaultToolkit().getImage("cbox/images/newmess.gif");
        img5 = Toolkit.getDefaultToolkit().getImage("cbox/images/delete.gif");
        img6 = Toolkit.getDefaultToolkit().getImage("cbox/images/add.gif");
        img7 = Toolkit.getDefaultToolkit().getImage("cbox/images/minimiz.gif");
        img8 = Toolkit.getDefaultToolkit().getImage("cbox/images/browlaunch.gif");
        img12 = Toolkit.getDefaultToolkit().getImage("cbox/images/searchbut.gif");
        tracker.addImage(img1, 1);
        tracker.addImage(img5, 5);
        tracker.addImage(img6, 6);
        tracker.addImage(img7, 7);
        tracker.addImage(img8, 8);
        tracker.addImage(img12, 12);
        try {
            tracker.waitForID(1);
            tracker.waitForID(5);
            tracker.waitForID(6);
            tracker.waitForID(7);
            tracker.waitForID(8);
            tracker.waitForID(12);
        } catch (InterruptedException _ex) {
        }
        bugReport = new ImageButton("Visite our Sponsors", img1);
        chandelete = new ImageButton("Delete Url", img5);
        addchan = new ImageButton("Add Url", img6);
        bold = new ImageButton("Minimize", img7);
        btnbrowlaunch = new ImageButton("Help", img8);
        searchbut = new ImageButton("searchbut", img12);
        tiplabel1 = new Label(parent.aplangstrings.getProperty("text054"));
        tiplabel1.setForeground(new Color(0, 0, 180));
        Label label = new Label(parent.aplangstrings.getProperty("text055"));
        label.setForeground(new Color(0, 0, 180));
        Label label2 = new Label(parent.aplangstrings.getProperty("text000"), 2);
        label2.setFont(new Font("ARIAL", 0, 11));
        label2.setForeground(new Color(0, 0, 180));
        urlEdit = new TextField(s);
        urlEdit.setForeground(new Color(0, 0, 180));
        searchinput = new TextField();
        m_menu = new PopupMenu();
        m_red = new MenuItem("Paste");
        m_menu.add(m_red);
        m_red.addActionListener(new ActionListener() {

            public void actionPerformed(ActionEvent actionevent) {
                System.out.println("yeheee!");
            }

        });
        searchinput.addMouseListener(new MouseAdapter() {

            public void mouseReleased(MouseEvent mouseevent) {
                if (mouseevent.isPopupTrigger()) {
                    int i = mouseevent.getX();
                    int j = mouseevent.getY();
                    m_menu.show(parent, i, j);
                }
            }

        });
        searchinput.setForeground(new Color(0, 0, 180));
        quicklist = new java.awt.List(20);
        quicklist.setBackground(new Color(252, 252, 255));
        quicklist.setForeground(new Color(0, 0, 80));
        searchChoice = new Choice();
        searchChoice.setBackground(new Color(235, 235, 255));
        new Panel();
        Panel panel = new Panel(new BorderLayout());
        panel.setBackground(new Color(225, 225, 225));
        panel.setForeground(new Color(225, 225, 225));
        panel.add("West", addchan);
        panel.add("Center", chandelete);
        panel.add("East", btnbrowlaunch);
        Panel panel1 = new Panel(new BorderLayout());
        panel1.setBackground(new Color(225, 225, 225));
        panel1.add("Center", tiplabel1);
        // panel1.add("West", btnbrowlaunch);
        panel1.add("East", bold);
        Panel panel2 = new Panel(new BorderLayout());
        panel2.add("Center", urlEdit);
        panel2.add("East", panel);
        Panel panel3 = new Panel(new BorderLayout());
        panel3.add("Center", label);
        Panel panel4 = new Panel(new BorderLayout());
        panel4.add("North", panel1);
        panel4.add("Center", panel2);
        panel4.add("South", panel3);
        Panel panel5 = new Panel(new BorderLayout());
        panel5.setBackground(new Color(225, 225, 225));
        panel5.setForeground(new Color(225, 225, 225));
        panel5.add("North", searchinput);
        panel5.add("Center", searchChoice);
        Panel panel6 = new Panel(new BorderLayout());
        panel6.setBackground(new Color(225, 225, 225));
        panel6.setForeground(new Color(225, 225, 225));
        panel6.add("Center", searchbut);
        Panel panel7 = new Panel(new BorderLayout());
        panel7.add("Center", label2);
        // panel7.add("Center", panel5);

        // panel7.add("West", panel6);

        Panel panel8 = new Panel(new BorderLayout());
        panel8.add("North", panel4);
        panel8.add("Center", quicklist);
        panel8.add("South", panel7);
        add(panel8);
        bugReport.addActionListener(this);
        bugReport.addMouseListener(this);
        btnbrowlaunch.addActionListener(this);
        btnbrowlaunch.addMouseListener(this);
        addchan.addActionListener(this);
        addchan.addMouseListener(this);
        chandelete.addActionListener(this);
        chandelete.addMouseListener(this);
        bold.addActionListener(this);
        bold.addMouseListener(this);
        quicklist.addItemListener(this);
        quicklist.addMouseListener(this);
        quicklist.addActionListener(this);
        searchbut.addActionListener(this);
        searchbut.addMouseListener(this);
        urlEdit.addActionListener(this);
        searchinput.addActionListener(this);
        addWindowListener(new JBrowserOpenWindowListener());
        setLocation(320, 20);
        loadWatchlist();
        resize(300, 500);
        setVisible(true);
        isbolder = false;
        // showlinkOns();
        setResizable(false);
    }

    public void keyTyped(KeyEvent keyevent) {
    }

    public void keyPressed(KeyEvent keyevent) {
    }

    public void itemStateChanged(ItemEvent itemevent) {
        showdaquickie();
    }

    public void mouseReleased(MouseEvent mouseevent) {
    }

    public void sortMyquickList(String s1) {
        int j = 0;
        for (int k = quicklist.countItems() - 1; j < k; ) {
            int l = (j + k) / 2;
            if (s1.toLowerCase().compareTo(quicklist.getItem(l).toLowerCase()) > 0)
                j = l + 1;
            else
                k = l;
        }

        quicklist.addItem(s1, j);
    }


    public void loadWatchlist() {
        quicklist.removeAll();
        try {
            FileInputStream fileinputstream = new FileInputStream("cbox/prefs/links.prfs");
            DataInputStream datainputstream = new DataInputStream(fileinputstream);
            String s;
            while ((s = datainputstream.readLine()) != null)
                sortMyquickList(s);
            datainputstream.close();
            fileinputstream.close();
            return;
        } catch (Exception _ex) {
            new Messdialog1(parent, parent.aplangstrings.getProperty("text049"));
        }
    }

    public void savenewlist() {
        try {
            FileOutputStream fileoutputstream = new FileOutputStream("cbox/prefs/links.prfs");
            PrintStream printstream = new PrintStream(fileoutputstream);
            for (int i = 0; i < quicklist.getItemCount(); i++)
                printstream.println(quicklist.getItem(i));

            printstream.close();
            fileoutputstream.close();
        } catch (Exception exception) {
            System.out.println(exception);
        }
        new Messdialog1(parent, parent.aplangstrings.getProperty("text050"));
        loadWatchlist();
    }

    public void saveWatchlist() {
        try {
            String s = urlEdit.getText();
            quicklist.addItem(s);
            FileOutputStream fileoutputstream = new FileOutputStream("cbox/prefs/links.prfs");
            PrintStream printstream = new PrintStream(fileoutputstream);
            for (int i = 0; i < quicklist.getItemCount(); i++)
                printstream.println(quicklist.getItem(i));

            printstream.close();
            fileoutputstream.close();
            new Messdialog1(parent, parent.aplangstrings.getProperty("text051"));
        } catch (Exception exception) {
            System.out.println(exception);
        }
        loadWatchlist();
    }

    public static void main(String args[]) {
    }

    public void actionPerformed(ActionEvent actionevent) {
        Object obj = actionevent.getSource();
        if (obj == urlEdit)
            parent.gotoit(urlEdit.getText(), thebrow);
        if (obj == searchinput)
            searchit();
        if (obj == quicklist) {
            String s = quicklist.getSelectedItem();
            urlEdit.setText("" + s + "");
            parent.gotoit(urlEdit.getText(), thebrow);
            dispose();
        } else {
            // return;
        }
    }

    public void keyReleased(KeyEvent keyevent) {
    }

    public void mouseEntered(MouseEvent mouseevent) {
        Component component = mouseevent.getComponent();
        if (component == btnbrowlaunch) {
            tiplabel1.setText(parent.aplangstrings.getProperty("text196"));
            return;
        }
        if (component == searchbut) {
            tiplabel1.setText(parent.aplangstrings.getProperty("text047"));
            return;
        }
        if (component == chandelete) {
            tiplabel1.setText(parent.aplangstrings.getProperty("text052"));
            return;
        }
        if (component == addchan) {
            tiplabel1.setText(parent.aplangstrings.getProperty("text053"));
            return;
        }
        if (component == bugReport) {
            tiplabel1.setText("Fale connosco");
            return;
        }
        if (component == bold) {
            if (!isbolder) {
                tiplabel1.setText(parent.aplangstrings.getProperty("text020"));
                return;
            } else {
                tiplabel1.setText(parent.aplangstrings.getProperty("text021"));
                return;
            }
        } else {
            return;
        }
    }

    public void mouseExited(MouseEvent mouseevent) {
        tiplabel1.setText(parent.aplangstrings.getProperty("text054"));
    }

    public void isitBolder() {
        if (!isbolder) {
            resize(300, 48);
            setLocation(200, 2);
            isbolder = true;
            return;
        }
        if (isbolder) {
            resize(300, 500);
            setLocation(320, 20);
            isbolder = false;
            return;
        } else {
            return;
        }
    }

    java.awt.List quicklist;
    Choice searchChoice;
    TextField searchinput;
    protected boolean isbolder;
    Image img1;
    Image img5;
    Image img6;
    Image img7;
    Image img8;
    Image img12;
    ImageButton chandelete;
    ImageButton addchan;
    ImageButton bold;
    ImageButton btnbrowlaunch;
    ImageButton quicklinks;
    ImageButton searchbut;
    ImageButton bugReport;
    Label tiplabel1;
    Label label1;
    String inifile;
    Properties httpconfig;
    adminApp parent;
    Label l;
    static String s9 = "";
    TextField urlEdit;
    MediaTracker tracker;
    PopupMenu m_menu;
    private MenuItem m_red;
    int thebrow;
}
